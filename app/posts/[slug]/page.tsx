import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mx-auto max-w-4xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-base text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="mb-1 text-base text-gray-600">
          {post.readTime.text}
        </div>
        <h1 className="text-3xl font-bold px-8">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 px-8 prose prose-slate dark:prose-invert prose-a:text-blue-700 mx-auto" >
        <MDXContent />
      </div>
    </article>
  )
}

export default PostLayout