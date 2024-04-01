import CardBaseBat from "@/components/Card/light/cardBasebat"
import CardSpotRiver from "@/components/Card/light/cardSpotRiver"
import CardSpotVegas from "@/components/Card/light/cardSpotVegas"
import CardVegas from "@/components/Card/light/cardVegas"
export default function BelowSection(){
    return(
        <div className="bg-gradient-to-b from-slate-100 to-blue-50 p-6">
        <div className="p-6 px-2">
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-gray-950">Collection Spotlight</h1>
            <p className="mt-3 text-sm text-gray-300 p-2 text-gray-900">
              Discover extraordinay moments with our Spotlight
              metatickets-exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className="flex p-2 justify-center items-center justify-evenly">
          <span className="material-symbols-outlined justify-center items-center fill-current text-blue-500">arrow_back_ios</span>
            <div className="mr-4 ml-4 grid gap-4 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">              
              
              <CardSpotVegas/>
              <CardSpotRiver/>
              <CardSpotVegas/>
                           
            </div>
            <span className=" material-symbols-outlined justify-center align-center fill-current text-blue-500">arrow_forward_ios</span>
          </div>
        </div>
      </div>
    )
}