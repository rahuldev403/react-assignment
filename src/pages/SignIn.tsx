import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../components/Field";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-4 pt-10 text-[#111827]">
      <main className="mx-auto w-full max-w-[343px]">
        <div className="max-w-[240px]">
          <h1 className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-[#2b2e33]">
            Signin to your PopX account
          </h1>
          <p className="mt-4 text-[14px] font-semibold leading-[1.45] text-[#9a9aa1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <Field
            label="Email Address"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Field
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`mt-1 flex h-12 w-full items-center justify-center rounded-[4px] text-[14px] font-semibold text-white transition-colors duration-200 ${
              isFormValid
                ? "bg-[#6c25ff] cursor-pointer"
                : "bg-[#cbcbcb] cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
