import React from "react";
import { useForm } from "react-hook-form";

export default function ProfileForm({ setProfileData }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setProfileData(data);
    reset();
  };
  return (
    <div className="flex flex-col items-center w-100">
      <div className="card w-full max-w-sm shadow-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 text-white rounded-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create Profile
          </h2>

          <form
            className="fieldset space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="indicator w-full">
              <span className="indicator-item badge badge-warning text-black">
                Required
              </span>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white text-black placeholder:text-gray-500 focus:text-black focus:bg-white focus:outline-emerald-300"
                {...register("name", { required: true })}
              />
            </div>

            <div className="indicator w-full">
              <span className="indicator-item badge badge-warning text-black">
                Required
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="input input-bordered w-full bg-white text-black focus:outline-emerald-300"
                {...register("email", { required: true })}
              />
            </div>

            <div className="indicator w-full">
              <input
                type="text"
                placeholder="Your Profession"
                className="input input-bordered w-full bg-white text-black focus:outline-emerald-300"
                {...register("profession", { required: true })}
              />
            </div>

            <div className="indicator w-full">
              <input
                type="text"
                placeholder="Your Photo Link"
                className="input input-bordered w-full bg-white text-black focus:outline-emerald-300"
                {...register("photo", { required: true })}
              />
            </div>

            <button className="btn bg-black text-white hover:bg-emerald-900 border-none mt-4 w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
