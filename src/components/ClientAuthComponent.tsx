"use client";

import { useAuth } from "@clerk/nextjs";

export default function ClientAuthComponent() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div>読み込み中...</div>;
  }

  if (!userId) {
    return <div>認証が必要です</div>;
  }

  return <div>認証済みユーザー向けコンテンツ</div>;
}
