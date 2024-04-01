import Link from "next/link"
export default function HomeButton (){
    return(
        <div className="mt-20 flex items-center justify-center">
        <Link
          href='/'
        >
          <button className="bg-blue-500 p-4 rounded-md text-sm hover:bg-blue-700">
          <span className="text-slate-50">Home</span>
        </button>
        </Link>
      </div>
    )
}