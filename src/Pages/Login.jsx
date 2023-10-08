import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/navbar/Navbar";
import { useContext } from "react";
import { MyContex } from "../contex/Contex";

const Login = () => {
        const location =useLocation();
        const navigate = useNavigate();
        const {signIn}=useContext(MyContex)
        const handleSignin =e=>{
             e.preventDefault();
             const form = new FormData(e.currentTarget);
             const email= form.get('email')
             const password = form.get('password')
             signIn(email, password)
             .then(res=>{
              console.log(res.user);
              navigate(location?.state? location.state : '/')
          })
          .catch(err=>{
              console.log(err);
          })
              
             
        }

  return (
    <div>
        <Navbar></Navbar>
      <div>
      <h2 className="text-center mt-14 text-4xl">Please, Login</h2>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-20">
        <form className="card-body" onSubmit={handleSignin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-5">Don`t have an account <Link to={'/register'} className="text-lg font-bold text-blue-700">Register</Link></p>
      </div>
      </div>
    </div>
  );
};

export default Login;
