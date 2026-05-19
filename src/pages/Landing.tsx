import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] px-4 pb-10">
      <main className="mx-auto mt-auto flex w-full max-w-[343px] flex-col">
        <h1 className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-[#2b2e33]">
          Welcome to PopX
        </h1>
        <p className="mt-4 text-[14px] font-semibold leading-[1.45] text-[#9a9aa1] max-w-[240px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-8 space-y-3">
          <Link
            to="/signup"
            className="flex h-12 w-full items-center justify-center rounded-[6px] bg-[#6c25ff] text-[14px] font-semibold text-white"
          >
            Create Account
          </Link>
          <Link
            to="/signin"
            className="flex h-12 w-full items-center justify-center rounded-[6px] bg-[#d2c4ff] text-[14px] font-bold text-[#111827]"
          >
            Already Registered? Login
          </Link>
        </div>
      </main>
    </div>
  );
}
