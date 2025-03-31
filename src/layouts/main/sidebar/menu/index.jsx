import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full transition-colors inline-flex pr-4 items-center gap-5 group-hover:bg-[#eff3f41a]",
              { "font-bold": isActive }
            )}
          >
            <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
              <path
                fill={isActive ? "#e7e9ea" : "none"} 
                stroke="#e7e9ea" 
                strokeWidth="2"
                d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
              />
            </svg>
            <div className="pr-4 text-xl">Anasayfa</div>
          </div>
        )}
      </NavLink>

      <NavLink to="/explore" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full transition-colors inline-flex pr-4 items-center gap-5 group-hover:bg-[#eff3f41a]",
              { "font-bold": isActive }
            )}
          >
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea" // Her durumda içi dolu
              stroke={isActive ? "#e7e9ea" : "none"} // Aktif değilse stroke kaldır
              strokeWidth={isActive ? "1" : "0"} // Aktifken kalın çizgi
            >
              <path
                d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
              />
            </svg>
            <div className="pr-4 text-xl">Keşfet</div>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
