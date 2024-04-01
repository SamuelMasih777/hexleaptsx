export default function CardBaseBat() {
    return (
      <div className="flex bg-slate-50 shadow transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
        <div className="ml-1 max-w-auto ">
          <div>
            <img
              className="p-4 w-64 h-90"
              src="https://st.depositphotos.com/2355249/2563/i/450/depositphotos_25638673-stock-photo-baseball-player.jpg"
              alt="Preview Image"
            />
            <h1 className="px-4 font-medium text-lg text-gray-950">Sacramento River Cats</h1>
            <div className="p-2 m-4 bg-gray-100">
              <div className=" flex justify-between text-gray-400">
                <div className="">
                  <h2>Total Events</h2>
                </div>
                <div className="mr-16">
                  <h2>Sport</h2>
                </div>
              </div>
              <div className="font-normal flex justify-between text-gray-950">
                <div>
                  <h2>48 Events</h2>
                </div>
                <div>
                  <h2 className="mr-10">Baseball</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  