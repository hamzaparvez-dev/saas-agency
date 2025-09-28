import { sql } from '@vercel/postgres';
import { readFile } from 'fs/promises';
import path from 'path';

// This function loads the .env.local file
async function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envFile = await readFile(envPath, 'utf-8');
  for (const line of envFile.split('\n')) {
    const match = line.match(/^([^=:#]+)=(.*)/);
    if (match) {
      const key = match[1];
      let value = match[2];
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  }
}

async function main() {
  await loadEnv();

  console.log('Connecting to database...');
  // Test connection
  try {
      const client = await sql.connect();
      client.release();
      console.log('Database connection successful.');
  } catch(e) {
      console.error('Could not connect to database. Please check your .env.local file.');
      console.error(e);
      return;
  }

  console.log('Reading blog posts from src/data/blog.json...');
  const jsonPath = path.join(process.cwd(), 'src', 'data', 'blog.json');
  const jsonFile = await readFile(jsonPath, 'utf-8');
  const posts = JSON.parse(jsonFile);

  console.log(`Found ${posts.length} posts to migrate.`);

  // Clear the table first to avoid duplicates
  console.log('Clearing existing "BlogPost" table...');
  await sql`DELETE FROM "BlogPost"`;
  console.log('Table cleared.');

  for (const post of posts) {
    console.log(`Migrating post: "${post.title}"`);
    try {
      await sql`
        INSERT INTO "BlogPost" (
          id, title, slug, excerpt, content, "metaDescription", "metaKeywords", 
          "authorName", "authorBio", "authorAvatar", category, tags, "featuredImage", 
          "publishedAt", "updatedAt", "readTime", "isPublished", "seoTitle"
        ) VALUES (
          ${post.id}, ${post.title}, ${post.slug}, ${post.excerpt}, ${post.content}, 
          ${post.metaDescription}, ${post.metaKeywords}, ${post.author.name}, 
          ${post.author.bio}, ${post.author.avatar}, ${post.category}, ${post.tags}, 
          ${post.featuredImage}, ${post.publishedAt}, ${post.updatedAt}, 
          ${post.readTime}, ${post.isPublished}, ${post.seoTitle || null}
        )
      `;
    } catch (error) {
      console.error(`Failed to migrate post "${post.title}":`, error);
    }
  }

  console.log('Migration complete!');
}

main().catch(console.error);
