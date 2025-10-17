"use client";

import { useState } from "react";

export default function LikeButton({ likes }: { likes: number }) {
  // Optimistic Updates(낙관적 업데이트)
  // 클라이언트 단 요청 완료되기도 전에 likes 값을 화면에서 즉시 반영합니다.
  // 나중에 실제 요청이 실패하면 다시 이전 상태로 롤백시키는 역할을 합니다.
  const [count, setCount] = useState<number>(likes ?? 0);
  const [isLiking, setIsLiking] = useState(false);

  const handleClick = async () => {
    // 낙관적 업데이트
    setIsLiking(true);
    setCount((c) => c + 1);

    // 실제 서버 요청(API 호출 등)이 있다면 이곳에서 호출을 수행합니다.
    // 예: await fetch('/api/like', { method: 'POST', body: JSON.stringify({ id }) })

    setTimeout(() => setIsLiking(false), 300);
  };

  return (
    <button onClick={handleClick} disabled={isLiking} aria-pressed={false}>
      {count}
    </button>
  );
}
