import Counter from "@/components/Counter";
import LikeButton from "../ui/like";
import { posts } from "./posts";

export default async function Like({ params }: { params: { id: string } }) {
  const { id } = await params; // await 제거
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <h1>게시글을 찾을 수 없습니다!</h1>;
  }

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        <LikeButton likes={post.likes} />
        <Counter />
      </main>
    </div>
  );
}
