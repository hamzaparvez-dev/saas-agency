import { ImageResponse } from 'next/og'
import { getBlogPostBySlug } from '@/lib/blog'
 
// DELETE THIS LINE:
// export const runtime = 'edge' 
 
export const alt = 'Genuine Stack Blog Post'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
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
        <div style={{ padding: '40px', textAlign: 'center', lineHeight: 1.2 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, color: '#888', marginTop: 20 }}>
          Genuine Stack | SaaS & AI Insights
        </div>
      </div>
    ),
    { ...size }
  )
}
