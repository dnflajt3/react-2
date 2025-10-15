import { posts } from "./posts";

export default async function Page() {
  if (!posts) {
    return <h1>게시글을 찾을 수 없습니다!</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
