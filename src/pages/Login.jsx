import NavBar from "../components/Navbar";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../AuthProvider";

export default function Login() {
  const {user, logIn, errorMessage} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="hero h-[86vh] bg-base-200">
        <div className="hero-content w-full">
          <div className="card w-full max-w-md shadow-2xl bg-base-100 border-2 border-yellow-500 rounded-none">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  name="email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered rounded-none"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Don&#39;t have an account?
                    <span className="text-blue-600 underline"> Register</span>
                  </Link>
                </label>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button className="btn btn-circle text-3xl">
                  <FcGoogle />
                </button>
                <button className="btn btn-circle text-3xl">
                  <FaGithub />
                </button>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-yellow-500 font-bold text-gray-950 hover:text-white rounded-none">
                  Login
                </button>
              </div>
              {errorMessage ? (
                <h3 className="text-red-600">{errorMessage}</h3>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
