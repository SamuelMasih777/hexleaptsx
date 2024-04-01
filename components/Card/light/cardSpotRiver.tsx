import Image from "next/image";
export default function CardSpotRiver() {
    return (
      <div className="flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
        <div className="max-w-64 shadow bg-slate-50">
          <div>
            <div className="border-b-2 border-dashed border-slate-700">
            <img
              className="p-4 w-64 h-80"
              src="https://i.pinimg.com/564x/05/18/5e/05185eb3f4e9c4dbd6b9100a6ba0d35b.jpg"
              alt="Preview Image"
            />
            </div>
            <h1 className="flex px-4 mt-4 font-medium text-lg text-slate-950 justify-center item-center">Sacramento River Cats</h1>
            <div className="p-2 m-2 ">
             <div className="flex flex-row text-slate-900 justify-center item-center">
                <h1>OCT 15 | SUN | 4:30 PM</h1>
             </div>
             <div className="mt-2 flex flex-row text-slate-500 text-center justify-center item-center">
                <p>Sutter Health Park, Scramento, California</p>
             </div>
              <div className="mt-2 p-2 font-normal flex  text-slate-50 bg-neutral-950 justify-center item-center">
                <div>
                  <h2 className="">Orange Collection</h2>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  