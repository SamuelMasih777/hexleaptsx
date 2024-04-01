import CardAd from "@/components/Card/dark/cardAd"
import CardBaseBat from "@/components/Card/dark/cardBasebat"
import CardVegas from "@/components/Card/dark/cardVegas"
export default function AboveSection (){
    return (
        <div className="p-2 px-2">
        <div className="">
        <h1 className="items-start py-4 mb-5 font-bold text-2xl ">
          <span className="py-2 border-b-4 border-blue-600 text-slate-50">Sports</span>
        </h1>
        <div className="justify-center items-center justify-evenly grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">          
          <CardBaseBat />          
          <CardVegas/>
          <CardBaseBat />
          <CardVegas/>          
          <CardAd />
        </div>
        <div className="p-16 flex items-center justify-center">
          <button className="bg-blue-500 p-4 rounded-md text-sm hover:bg-blue-700 text-slate-50">
            See More
          </button>
        </div>
      </div>
      </div>
    )
}