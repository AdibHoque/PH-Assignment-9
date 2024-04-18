import {useContext} from "react";
import {AuthContext} from "../AuthProvider";
import {Helmet} from "react-helmet-async";

export default function UpdateProfile() {
  const {user, errorMessage, profileUpdate} = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const photo = form.get("photo");

    profileUpdate(username, photo);
  };
  return (
    <>
      <Helmet>
        <title>LE - UPDATE PROFILE</title>
      </Helmet>
      <div className="hero min-h-[86vh] bg-base-200 animate__animated animate__slideInDown">
        <div className="w-full hero-content">
          <div className="w-full max-w-md border-2 border-yellow-500 rounded-none shadow-2xl card bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.displayName}
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
                  placeholder={user.photoURL}
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
                  placeholder={user.email}
                  name="email"
                  className="rounded-none input input-bordered"
                  disabled
                />
              </div>

              <div className="mt-2 form-control">
                <button className="font-bold bg-yellow-500 rounded-none btn text-gray-950 hover:text-white">
                  Update Profile
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
