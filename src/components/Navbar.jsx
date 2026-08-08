const Navbar = () => {
  return (
    <div className=" border-r border-slate-800 bg-slate-900 p-5 pr-15 flex flex-col">
      {/* logo and title */}
      <div className="flex gap-3 items-center">
        <div className="w-5 h-5 p-3 bg-purple-500 flex justify-center items-center rounded-sm">
          <span className="text-black font-bold">C</span>
        </div>
        <h1 className="font-bold">CarMaint</h1>
      </div>
    </div>
  );
};

export default Navbar;
