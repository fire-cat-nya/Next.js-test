import { auth } from "@clerk/nextjs/server";

export default async function ProtectedPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>認証が必要です</div>;
  }

  return <div>認証済みユーザー向けコンテンツ</div>;
}
