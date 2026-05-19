import { useNavigate } from "react-router-dom";
import { Field } from "../components/Field";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] px-4 pt-10 text-[#111827]">
      <main className="mx-auto flex flex-1 flex-col w-full max-w-[343px]">
        <div className="max-w-[240px]">
          <h1 className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-[#2b2e33]">
            Create your PopX account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col flex-1 pb-10"
        >
          <div className="space-y-6">
            <Field label="Full Name" placeholder="Marry Doe" required />
            <Field label="Phone number" placeholder="Marry Doe" required />
            <Field label="Email address" placeholder="Marry Doe" required />
            <Field
              label="Password"
              placeholder="Marry Doe"
              type="password"
              required
            />
            <Field label="Company name" placeholder="Marry Doe" />

            <div className="pt-2">
              <label className="block text-[14px] font-semibold text-[#2b2e33]">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
              <div className="mt-3 flex items-center space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    className="h-5 w-5 border-[#cbcbcb] text-[#6c25ff] focus:ring-[#6c25ff]"
                    defaultChecked
                  />
                  <span className="text-[14px] text-[#2b2e33]">Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    className="h-5 w-5 border-[#cbcbcb] text-[#6c25ff] focus:ring-[#6c25ff]"
                  />
                  <span className="text-[14px] text-[#2b2e33]">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-[4px] bg-[#6c25ff] text-[14px] font-semibold text-white"
            >
              Create Account
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
