import NavBar from "../components/Navbar";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../AuthProvider";
import {useNavigate} from "react-router-dom";

export default function Register() {
  const {user, createUser, errorMessage} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const username = form.get("username");
    const photo = form.get("photo");

    createUser(email, password, username, photo);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="hero h-[86vh] bg-base-200">
        <div className="w-full hero-content">
          <div className="w-full max-w-md border-2 border-yellow-500 rounded-none shadow-2xl card bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Username"
                  name="username"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="URL of photo"
                  name="photo"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  name="email"
                  className="rounded-none input input-bordered"
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
                  className="rounded-none input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                    <span className="text-blue-600 underline"> Login</span>
                  </Link>
                </label>
              </div>
              <div className="flex items-center justify-center gap-5">
                <button className="text-3xl btn btn-circle">
                  <FcGoogle />
                </button>
                <button className="text-3xl btn btn-circle">
                  <FaGithub />
                </button>
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold bg-yellow-500 rounded-none btn text-gray-950 hover:text-white">
                  Register
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
