import Image from "next/image";
export default function CardAd() {
    return (
      <div className="flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105">
        <div className="max-w-auto bg-neutral-700">
          <div>
            <img
              className="p-4 w-64 h-56"
              src="https://pbs.twimg.com/media/F85jZtwaMAAdEo6?format=jpg&name=large"
              alt="Preview Image"
            />
            <h1 className="px-6 font-medium text-lg text-slate-50">Advertisement Title</h1>
            <div className="">
              <div className="p-2 w-64">
                <p className="p-2 m-2 text-neutral-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  