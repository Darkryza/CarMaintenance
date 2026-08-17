import { Plus, Timer, TriangleAlert } from "lucide-react";
import { Link } from "react-router";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

function Dashboard() {
  const dataEnjinMinyak = [
    { name: "Enjin dan minyak", value: 85 },
    { name: "Balance", value: 100 - 85 },
  ];

  const dataBrekTauar = [
    { name: "Enjin dan minyak", value: 85 },
    { name: "Balance", value: 100 - 85 },
  ];

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
          <h1 className="text-slate-500 uppercase">Peringatan Aktif</h1>
          <span className="text-3xl font-bold">3</span>
          <p className="text-red-400">1 tertunggak</p>
        </div>
      </div>
      {/* fifth line - Incoming reminder */}
      <div className="flex mb-5 gap-5">
        <div className="flex-1 flex flex-col gap-3 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* first line */}
          <div className="flex justify-between mb-3">
            {/* title */}
            <h1 className="text-slate-500">Peringatan terdekat</h1>
            <Link className="text-violet-500/50 duration-100 hover:text-violet-400">
              Lihat semua
            </Link>
          </div>
          {/* list reminders */}
          <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-5">
            <div className="flex gap-2">
              <div className="p-2 rounded-lg bg-red-400/20">
                <TriangleAlert className="text-red-500/50" />
              </div>
              <div className="flex flex-col">
                <h1>Tukar minyak hitam & filter</h1>
                <p className="text-slate-600 text-xs">
                  Tertunggak 320km - jangka 5,000km
                </p>
              </div>
            </div>
            <span className="p-2 bg-red-400/20 rounded-md text-red-400 text-xs h-fit w-fit">
              Tertunggak
            </span>
          </div>
          <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-5">
            <div className="flex gap-2">
              <div className="p-2 rounded-lg bg-yellow-800/30">
                <Timer className="text-yellow-500/50" />
              </div>
              <div className="flex flex-col">
                <h1>Roadtax tamat tempoh</h1>
                <p className="text-slate-600 text-xs">
                  14 hari lagi - 20 Ogos 2026
                </p>
              </div>
            </div>
            <span className="p-2 bg-yellow-800/30 rounded-md text-yellow-600 text-xs h-fit w-fit">
              14 Hari
            </span>
          </div>
          <div className="flex justify-between items-center pb-5">
            <div className="flex gap-2">
              <div className="p-2 rounded-lg bg-yellow-800/30">
                <Timer className="text-yellow-500/50" />
              </div>
              <div className="flex flex-col">
                <h1>Semak tayar & alignment</h1>
                <p className="text-slate-600 text-xs">880 km lagi</p>
              </div>
            </div>
            <span className="p-2 bg-green-500/20 rounded-md text-green-500 text-xs h-fit w-fit">
              Terkawal
            </span>
          </div>
        </div>
      </div>
      {/* sixth line - Service health */}
      <div className="flex mb-5 gap-5">
        <div className="flex-1 flex flex-col gap-3 bg-slate-900 border border-slate-700 p-5 rounded-3xl">
          {/* title */}
          <h1 className="text-slate-500">Kesihatan servis</h1>
          {/* graph donut */}
          <div className="flex justify-between">
            <div className="relative w-50 h-50">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataEnjinMinyak}
                    nameKey="name"
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={80}
                    cornerRadius={8}
                  >
                    <Cell fill="#82ca9d" />
                    <Cell fill="#1e293b" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold">85%</span>
              </div>
            </div>
            <div className="relative w-50 h-50">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataEnjinMinyak}
                    nameKey="name"
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={80}
                    cornerRadius={8}
                  >
                    <Cell fill="#82ca9d" />
                    <Cell fill="#1e293b" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
