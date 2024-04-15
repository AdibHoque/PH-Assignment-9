import {Link, NavLink, useMatch} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {FaUserCircle} from "react-icons/fa";

export default function NavBar() {
  const {user, logOut} = useContext(AuthContext);
  const [navToggle, setNavToggle] = useState(false);
  const match = useMatch("/login");
  const navClass = ({isActive, isPending}) =>
    isPending || isActive
      ? "text-yellow-500 border-2 border-yellow-500 rounded-none font-extrabold hover:border-white hover:text-white"
      : "border-2 border-white font-bold rounded-none hover:border-yellow-500 hover:text-yellow-500";
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/sell" className={navClass}>
          SELL WITH US
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#202020] lg:px-24">
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            tabIndex={0}
            role="button"
            onClick={() => setNavToggle(!navToggle)}
            className="p-2 mr-2 btn btn-square btn-outline lg:hidden"
          >
            {navToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 text-2xl text-white stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 text-2xl text-white stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 animate-flip-down font-bold gap-2"
          >
            {links}
          </ul>
        </details>
        <Link className="mb-0 text-3xl font-bold leading-none text-yellow-500 lg:leading-none lg:text-3xl animate-fade-right animate-once font-playfair">
          LUXELIFE<br></br>
          <span className="mt-0 leading-none tracking-widest">ESTATES</span>
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex animate-fade-up animate-once">
        <ul className="gap-2 px-2 text-white menu menu-horizontal">{links}</ul>
      </div>
      <div className="flex navbar-end animate-fade-left animate-once">
        {user ? (
          <div className="flex justify-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user.email}>
              <button className="text-4xl text-white btn btn-circle btn-ghost">
                {user.photoURL ? (
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                ) : (
                  <FaUserCircle />
                )}
              </button>
            </div>

            <button
              onClick={logOut}
              className="btn btn-outline bg-transparent font-roboto border-white border-2 text-white rounded-none hover:border-yellow-500 hover:text-yellow-500 hover:bg-[#202020]"
            >
              LOGOUT
            </button>
          </div>
        ) : match ? (
          <Link
            to="/register"
            className="btn btn-outline bg-transparent font-roboto border-white border-2 text-white rounded-none hover:border-yellow-500 hover:text-yellow-500 hover:bg-[#202020]"
          >
            REGISTER
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline bg-transparent font-roboto border-white border-2 text-white rounded-none hover:border-yellow-500 hover:text-yellow-500 hover:bg-[#202020]"
          >
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}
