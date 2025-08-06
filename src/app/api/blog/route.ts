import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost, generateSlug, calculateReadTime } from '@/lib/blog';
import { BlogPost } from '@/lib/blog';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeUnpublished = searchParams.get('includeUnpublished') === 'true';
    
    const posts = getAllBlogPosts(includeUnpublished);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'add':
        const newPost = await addBlogPost(data);
        return NextResponse.json({ success: true, post: newPost });
      
      case 'update':
        const { id, ...updates } = data;
        const updated = await updateBlogPost(id, updates);
        return NextResponse.json({ success: updated });
      
      case 'delete':
        const deleted = await deleteBlogPost(data.id);
        return NextResponse.json({ success: deleted });
      
      case 'generateSlug':
        const slug = generateSlug(data.title);
        return NextResponse.json({ slug });
      
      case 'calculateReadTime':
        const readTime = calculateReadTime(data.content);
        return NextResponse.json({ readTime });
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error processing blog operation:', error);
    return NextResponse.json({ error: 'Failed to process blog operation' }, { status: 500 });
  }
} 