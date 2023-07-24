type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
  const posts = await promise

  const content = posts.map(post => {
    return (
      <article key={post.id}>
        <header>
          <h2>{post.title}</h2>
        </header>
      </article>
    )
  })

  return content
}