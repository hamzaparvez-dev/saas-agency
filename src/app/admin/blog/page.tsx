"use client";

import { useState, useEffect } from 'react';
import { BlogPost, getAllBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost, generateSlug, calculateReadTime } from '@/lib/blog';
import { Plus, Edit, Trash2, Eye, Save, X, Calendar, Clock, User, Tag } from 'lucide-react';
import Image from 'next/image';

interface BlogFormData extends Omit<BlogPost, 'id' | 'publishedAt' | 'updatedAt' | 'readTime'> {
  publishedAt?: string;
  updatedAt?: string;
  readTime?: number;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    metaDescription: '',
    metaKeywords: [],
    author: {
      name: '',
      bio: '',
      avatar: '/images/team/default-avatar.jpg'
    },
    category: '',
    tags: [],
    featuredImage: '',
    isPublished: false,
    seoTitle: ''
  });

  // Simple authentication (In production, use proper authentication)
  const handleAuth = () => {
    if (password === 'admin123') { // Change this to a secure password
      setIsAuthenticated(true);
      loadPosts();
    } else {
      alert('Invalid password');
    }
  };

  const loadPosts = () => {
    const allPosts = getAllBlogPosts(true);
    setPosts(allPosts);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      metaDescription: '',
      metaKeywords: [],
      author: {
        name: '',
        bio: '',
        avatar: '/images/team/default-avatar.jpg'
      },
      category: '',
      tags: [],
      featuredImage: '',
      isPublished: false,
      seoTitle: ''
    });
    setEditingPost(null);
    setShowForm(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      ...post,
      metaKeywords: [...post.metaKeywords],
      tags: [...post.tags]
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Generate slug if not provided
      const slug = formData.slug || generateSlug(formData.title);
      
      // Calculate read time
      const readTime = calculateReadTime(formData.content);

      const postData = {
        ...formData,
        slug,
        readTime,
        publishedAt: formData.publishedAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      let success = false;
      if (editingPost) {
        success = updateBlogPost(editingPost.id, postData);
      } else {
        success = addBlogPost(postData);
      }

      if (success) {
        loadPosts();
        resetForm();
        alert(editingPost ? 'Post updated successfully!' : 'Post created successfully!');
      } else {
        alert('Error saving post. Please try again.');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      const success = deleteBlogPost(id);
      if (success) {
        loadPosts();
        alert('Post deleted successfully!');
      } else {
        alert('Error deleting post. Please try again.');
      }
    }
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleKeywordsChange = (keywords: string) => {
    const keywordArray = keywords.split(',').map(k => k.trim()).filter(k => k);
    setFormData(prev => ({ ...prev, metaKeywords: keywordArray }));
  };

  const handleTagsChange = (tags: string) => {
    const tagArray = tags.split(',').map(t => t.trim()).filter(t => t);
    setFormData(prev => ({ ...prev, tags: tagArray }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
            />
            <button
              onClick={handleAuth}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Administration</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Post
          </button>
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-neutral-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Title and Slug */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* SEO Title and Meta Description */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, seoTitle: e.target.value }))}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Leave empty to use title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Meta Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.metaDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description for search engines (150-160 characters)"
                  />
                  <p className="text-sm text-neutral-500 mt-1">
                    {formData.metaDescription.length}/160 characters
                  </p>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief excerpt to display in blog listings"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Content * (Markdown supported)
                  </label>
                  <textarea
                    required
                    rows={15}
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder="Write your blog post content here using Markdown..."
                  />
                </div>

                {/* Category and Featured Image */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Category *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Featured Image URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.featuredImage}
                      onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="/images/blog/post-image.jpg"
                    />
                  </div>
                </div>

                {/* Keywords and Tags */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Meta Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={formData.metaKeywords.join(', ')}
                      onChange={(e) => handleKeywordsChange(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Tags (comma-separated) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.tags.join(', ')}
                      onChange={(e) => handleTagsChange(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                </div>

                {/* Author Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Author Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Author Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.author.name}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          author: { ...prev.author, name: e.target.value }
                        }))}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Author Avatar URL
                      </label>
                      <input
                        type="text"
                        value={formData.author.avatar}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          author: { ...prev.author, avatar: e.target.value }
                        }))}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Author Bio *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.author.bio}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        author: { ...prev.author, bio: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Publish Status */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isPublished"
                    checked={formData.isPublished}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    className="w-4 h-4 text-blue-500 bg-neutral-800 border-neutral-700 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="isPublished" className="text-sm font-medium text-neutral-300">
                    Publish immediately
                  </label>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-4 pt-6 border-t border-neutral-800">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    {loading ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative w-full lg:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                      <p className="text-neutral-300 text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        post.isPublished 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {post.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author.name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors text-sm"
                    >
                      <Edit className="w-3 h-3" />
                      Edit
                    </button>
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors text-sm"
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </a>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-400 text-lg">No blog posts found. Create your first post!</p>
          </div>
        )}
      </div>
    </div>
  );
}