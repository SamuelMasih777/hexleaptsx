import Image from "next/image";
export default function CardVegas() {
    return (
      <div className="flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
        <div className="max-w-auto bg-neutral-700">
          <div>
            <img
              className="p-4 w-64 h-80"
              src="https://media.istockphoto.com/id/177390818/photo/baseball-player.jpg?s=2048x2048&w=is&k=20&c=m4uA622n6bP8Xkuo0Pkw27jRcxCywb1mrrf4lDrHLo0="
              alt="Preview Image"
            />
            <h1 className="px-4 font-medium text-lg text-slate-50">Las Vegas Aviators</h1>
            <div className="p-2 m-4 bg-neutral-800">
              <div className=" flex justify-between text-gray-400">
                <div className="">
                  <h2>Total Event</h2>
                </div>
                <div className="mr-16">
                  <h2>Sport</h2>
                </div>
              </div>
              <div className="font-normal flex justify-between text-slate-50">
                <div>
                  <h2>28 Events</h2>
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
  