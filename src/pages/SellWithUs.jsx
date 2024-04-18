import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {Helmet} from "react-helmet-async";

const MySwal = withReactContent(Swal);

export default function SellWithUs() {
  const {user, createUser, errorMessage, profileUpdate} =
    useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Property Submitted!",
      text: "You'll soon receive an email for further steps to sell your property with us.",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <>
      <Helmet>
        <title>LE - SELL WITH US</title>
      </Helmet>
      <div className="hero min-h-[86vh] bg-base-200">
        <div className="w-full hero-content">
          <div className="w-full max-w-md border-2 border-yellow-500 rounded-none shadow-2xl card bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <caption className="text-2xl font-bold text-yellow-500">
                Sell With Us
              </caption>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Estate Name</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Name"
                  name="sname"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Estate Segment</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Segment"
                  name="sn"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Estate Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Estate Photo URL"
                  name="photo"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Area</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Facilities"
                  name="snaddfme"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Location"
                  name="slocation"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Price"
                  name="sprice"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Facilities</span>
                </label>
                <input
                  type="text"
                  defaultValue="Your Estate Facilities"
                  name="snaddfme"
                  className="rounded-none input input-bordered"
                  required
                />
              </div>
              <div className="mt-2 form-control">
                <button className="font-bold bg-yellow-500 rounded-none btn text-gray-950 hover:text-white">
                  Submit Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
