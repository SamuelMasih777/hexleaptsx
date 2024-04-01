import CardSpotVegas from "@/components/Card/dark/cardSpotVegas"
import CardSpotRiver from "@/components/Card/dark/cardSpotRiver"
export default function BelowSection(){
    return(
        <div className="bg-gradient-to-b from-cyan-950 to-gray-950 p-6">
        <div className="p-6 px-2">
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-slate-50">Collection Spotlight</h1>
            <p className="mt-3 text-sm text-gray-200 p-2 ">
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