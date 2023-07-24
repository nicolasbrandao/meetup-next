type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
  const posts = await promise

  return posts.map(post => {
    return (
      <>
        <p key={post.id}>
          {post.title}
        </p>
      </>
    )
  })
}