import { Plus } from "lucide-react";

function Dashboard() {
  return (
    <>
      {/* first line - tittle and button */}
      <div className="flex justify-between mb-5">
        {/* title */}
        <div className="flex flex-col">
          <h1 className="font-extrabold text-xl">Dashboard</h1>
          <p className="text-slate-600">Ringkasan status kenderaan anda</p>
        </div>
        {/* button */}
        <div className="p-2 rounded-md flex gap-2 bg-violet-500 justify-center items-center text-black cursor-pointer duration-300 hover:bg-violet-700 hover:text-white">
          <Plus />
          <span>Log servis terbaharu</span>
        </div>
      </div>
      {/* second line - card kereta dan distance km */}
      <div className="flex">
        <div className="flex-1 rounded-md p-2 border border-slate-800 bg-linear-to-br from-slate-800 to-slate-900 justify-between">
          <div className="flex flex-col">
            <div className="rounded-md p-2 border border-slate-400 inline-bl">
              WA3494Y
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
