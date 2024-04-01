export default function CardSpotVegas() {
    return (
      <div className="flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
        <div className="max-w-64 shadow bg-slate-50">
          <div>
            <div className="border-b-2 border-dashed border-slate-700">
            <img
              className="p-4 w-64 h-80"
              src="https://i.pinimg.com/736x/01/a0/e5/01a0e548b939fa898cfd2f6c8c211135.jpg"
              alt="Preview Image"
            />
            </div>
            <h1 className="flex px-4 mt-4 font-medium text-lg text-slate-950 justify-center item-center">Las Vegas Aviators</h1>
            <div className="p-2 m-2 ">
             <div className="flex flex-row text-slate-900 justify-center item-center">
                <h1>OCT 15 | SUN | 4:30 PM</h1>
             </div>
             <div className="mt-2 flex flex-row text-slate-500 text-center justify-center item-center">
                <p>Las Vegas Ballpark, Las Vegas, Nevada</p>
             </div>
              <div className="mt-2 p-2 font-normal flex  text-slate-50 bg-neutral-950 justify-center item-center">
                <div>
                  <h2 className="">Take Flight Collection</h2>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  