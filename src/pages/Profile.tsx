import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-[#111827]">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
        <h1 className="text-[18px] font-bold text-[#2b2e33]">
          Account Settings
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 pt-8 pb-8 max-w-[375px] mx-auto w-full border-b border-dashed border-[#dddddf]">
        <div className="flex items-center space-x-4">
          <div className="relative h-[76px] w-[76px]">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
            {/* Camera icon badge */}
            <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#6c25ff] text-white border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[10px] w-[10px]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.828-.414l-1.086-1.586A1 1 0 0011.586 2H8.414a1 1 0 00-.828.414L6.586 4.586A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-[16px] font-bold leading-tight text-[#2b2e33]">
              Marry Doe
            </h2>
            <p className="mt-1 text-[14px] text-[#2b2e33]">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="mt-8 text-[14px] leading-[1.6] text-[#9a9aa1]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </main>

      {/* Logout Footer */}
      <div className="p-4 border-t border-dashed border-[#dddddf] max-w-[375px] mx-auto w-full">
        <Link
          to="/"
          className="flex h-12 w-full items-center justify-center rounded-[6px] border border-[#6c25ff] text-[14px] font-bold text-[#6c25ff] bg-[#fafafa]"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
