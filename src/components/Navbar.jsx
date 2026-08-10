import {
  ChevronDown,
  CircleDollarSign,
  FileText,
  Heart,
  LayoutDashboard,
  Settings,
  Timer,
} from "lucide-react";
import { NavLink } from "react-router";

const navs = [
  { name: "Dashboard", link: "/", icon: <LayoutDashboard size={15} /> },
  { name: "Service Record", link: "/service", icon: <FileText size={15} /> },
  { name: "Reminder", link: "/reminder", icon: <Timer size={15} /> },
  { name: "Saving", link: "/saving", icon: <CircleDollarSign size={15} /> },
  { name: "Wishlist", link: "/wishlist", icon: <Heart size={15} /> },
  { name: "Setting", link: "/setting", icon: <Settings size={15} /> },
];

const Navbar = () => {
  return (
    <div className="w-[25%] md:w-[20%] border-r border-slate-800 bg-slate-900 p-5 flex flex-col">
      {/* logo and title */}
      <div className="flex gap-3 mb-5">
        <div className="w-5 h-5 p-3 bg-purple-500 flex justify-center items-center rounded-sm">
          <span className="text-black font-bold">C</span>
        </div>
        <h1 className="font-bold">CarMaint</h1>
      </div>
      {/* second line */}
      <div className="w-full p-2 bg-slate-800 border border-slate-700 flex flex-col rounded-lg mb-5">
        <h2 className="text-slate-400 text-[0.5rem]">Kenderaan aktif</h2>
        <div className="flex justify-between">
          <h1>Honda City 1.5 V</h1>
          <ChevronDown size={15} className="text-slate-400" />
        </div>
      </div>
      {/* Nav links */}
      <ul className="flex flex-col gap-5 text-slate-400">
        {navs.map((nav) => (
          <>
            {nav.name === "Setting" && (
              <div className="w-full h-px bg-slate-600"></div>
            )}
            <li key={nav.name}>
              <NavLink
                to={nav.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 ${
                    isActive &&
                    "bg-violet-950 rounded-xl border border-violet-400 text-violet-400 "
                  }`
                }
              >
                {nav.icon}
                {nav.name}
              </NavLink>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
