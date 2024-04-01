import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-gray-950 overflow-hidden ">
    <h1 className="flex mt-16 items-center justify-center  text-slate-50 font-bold text-3xl">
        Navigate to Respective Pages by Below Links
      </h1>
    <div className="flex p-16 mt-20 flex-row items-center justify-center gap-2">
      
      <div className="flex">
        <div className="text-slate-50 grid text-center place-items-center lg:max-w-lg lg:mb-0 ">
          <Link
            href="/dark-sports"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dark-Sports-Page{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Follow this Link to visit Dark Sports Page.
            </p>
          </Link>
        </div>

        <div className="text-slate-50 grid text-center place-items-center lg:max-w-lg  lg:mb-0 ">
          <Link
            href="/light-sports"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Light-Sports-Page{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Follow this Link to visit Light Sports Page.
            </p>
          </Link>
        </div>
      </div>
    </div>
    </main>
  );
}
