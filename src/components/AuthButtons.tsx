import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function AuthButtons() {
  return (
    <div>
      <SignInButton mode="modal">
        <button>サインイン</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button>サインアップ</button>
      </SignUpButton>
    </div>
  );
}
