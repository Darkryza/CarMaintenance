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
      <div className="flex mb-5">
        <div className="flex-1 rounded-3xl p-5 border border-slate-700 bg-linear-to-br from-slate-800 to-slate-900 flex justify-between items-center">
          {/* left card */}
          <div className="flex flex-col gap-2">
            {/* no plate */}
            <div className="w-fit rounded-md p-2 border border-slate-700 inline-b text-slate-500">
              WA3494Y
            </div>
            {/* car name */}
            <h1 className="text-xl font-bold tracking-widest">
              Honda City 1.5 V - 2014
            </h1>
            {/* service date */}
            <p className="text-slate-400">
              Servis terakhir: 12 Jun 2026 - 4 rekod tahun ini
            </p>
          </div>
          {/* right card */}
          <div className="flex flex-col gap-2 ">
            <h1 className="text-3xl font-bold tracking-widest">138,000</h1>
            <p className="text-slate-400 text-sm">KM SEMASA</p>
          </div>
        </div>
      </div>
      {/* third line - 2 card */}
      <div className="flex mb-5 gap-5">
        {/* left card */}
        <div className="flex-1 flex flex-col gap-2 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* title */}
          <h1 className="text-slate-500 uppercase text-sm">
            Servis akan datang
          </h1>
          {/* incoming km left */}
          <div className="flex items-end gap-2">
            <span className="text-white text-2xl font-bold tracking-widest">
              880
            </span>
            <span className="text-slate-500"> km lagi</span>
          </div>
          {/* note */}
          <span className="text-sm text-amber-400">Servis minyak hitam</span>
        </div>
        {/* right card */}
        <div className="flex-1 flex flex-col gap-2 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* title */}
          <h1 className="text-slate-500 uppercase">
            JUMLAH DIBELANJAKAN (2026)
          </h1>
          <span className="tracking-widest font-bold text-2xl">RM1,860</span>
          <span className="text-sm text-amber-400">+12% dari tahun lepas</span>
        </div>
      </div>
      {/* forth line - 2 card */}
      <div className="flex mb-5 gap-5">
        {/* left card */}
        <div className="flex-1 flex flex-col gap-3 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* title */}
          <h1 className="text-slate-500 uppercase text-sm">Tabungan Servis</h1>
          {/* saving for service */}
          <h1 className="text-2xl font-bold">
            RM648 <span className="text-slate-500 text-sm">/ RM1,200</span>
          </h1>
          <p className="text-green-500">53% tercapai</p>
        </div>
        {/* right card */}
        <div className="flex-1 flex flex-col gap-2 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* title */}
          <h1 className="text-slate-500 uppercase">
            JUMLAH DIBELANJAKAN (2026)
          </h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
