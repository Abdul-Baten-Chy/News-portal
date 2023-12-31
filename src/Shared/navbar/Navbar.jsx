import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png";
import { useContext } from "react";
import { MyContex } from "../../contex/Contex";

const Navbar = () => {

            const navLink = <>
            <NavLink className="mr-5" to={"/"}>Home</NavLink>
            <NavLink className="mr-5" to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
            
            </>
  const {user, logOut}= useContext(MyContex);

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              <img src={profile} />
              </div>
          </label>
          {
            user? <button onClick={logOut}>Log out</button>:<Link to={"/login"} className="btn">Login</Link>
          }         
        </div>
      </div>
    );
};

export default Navbar;