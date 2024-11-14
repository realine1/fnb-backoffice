import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for doesn't exist",
};

export const NotFound = () => {
  return (
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            The page you are looking for does not exist. Here are some helpful
            links:
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button className="w-1/2 px-5 py-2 text-sm tracking-wide transition-colors duration-200 bg-mainColor rounded-lg shrink-0 sm:w-auto hover:bg-darkAccent">
              <Link href="/">Take me home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;