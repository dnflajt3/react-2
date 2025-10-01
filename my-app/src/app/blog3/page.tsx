import Link from "next/link";
import { posts } from "./posts";

export default function Page() {
  
    if (!posts) {
      return <h1>게시글을 찾을 수 없습니다!</h1>;
    }
  
    return (
    <div>
      <h1>블로그 3 목록</h1>
      <ul>
        
      {
        posts.map((post)=>(
          <li key={post.slug}>
            <Link href={`/blog3/${post.slug}`}>{post.title}</Link>
          </li>
        ))
      }
      </ul>
      </div>
    );
}