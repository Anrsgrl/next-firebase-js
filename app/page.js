"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="flex items-center text-4xl">
            <span> + </span>
            <Image
              className="mx-2"
              src="/firebase.svg"
              alt="firebase logo"
              width={48}
              height={48}
              priority
            />
            <span>Firebase</span>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Start by creating a Firebase project and configure it in your{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              firebase/config
            </code>{" "}
            file. Add your Firebase credentials (API key, Auth domain, etc.)
            using{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              process.env.
            </code>{" "}
            for environment variable safety.
          </li>
          <li className="mb-2">
            Define your Firebase configuration in the{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              firebase/config
            </code>{" "}
            file. Make sure to import and initialize Firebase using the
            configuration from the environment variables.
          </li>
          <li className="mb-2">
            Add Firebase actions such as{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              get
            </code>
            ,{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              post
            </code>
            , and{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              update
            </code>{" "}
            in the{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              firebase/actions
            </code>{" "}
            file to handle CRUD operations on your Firebase data.
          </li>
          <li className="mb-2">
            Use the{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              .env.example
            </code>{" "}
            file to reference the environment variables, then create a{" "}
            <code className="bg-black/[.05] dark:bg-[rgba(0,158,103,0.5)] hover:dark:bg-[rgba(0,158,103,1)] transition-all ease-linear duration-300 cursor-pointer px-1 py-0.5 rounded font-semibold">
              .env
            </code>{" "}
            file to securely store your Firebase credentials.
          </li>
          <li>
            Save your files and test your Firebase connection by performing CRUD
            operations using the defined actions and ensuring data is
            successfully fetched, added, or updated.
          </li>
        </ol>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://templates.anarr.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore all templates
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://firebase.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase docs →
          </a>
        </div>
      </main>
    </div>
  );
}
