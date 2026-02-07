import { ImageResponse } from 'next/og'
import { getBlogPostBySlug } from '@/lib/blog'
 
export const runtime = 'edge'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  const title = post?.title || 'Genuine Stack Blog'
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          backgroundImage: 'linear-gradient(to bottom right, #111, #000)',
        }}
      >
        <div style={{ padding: '40px', textAlign: 'center' }}>
          {title}
        </div>
        <div style={{ fontSize: 30, color: '#888', marginTop: 20 }}>
          Genuine Stack | SaaS & AI Insights
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
