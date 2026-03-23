import { BadgeCheck, Briefcase, Mail } from "lucide-react";
import React from "react";
import background from "../../img/background.jpg";

export default function ProfileCard({ data }) {
  return (
    <div>
      <div className="card w-96 rounded-2xl shadow-2xl bg-gradient-to-br from-black via-zinc-900 to-emerald-700 text-white">
        <figure
          className="hero h-30"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></figure>

        <div className="avatar pl-5 -mt-12">
          <div className="ring-white ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
            <img src={data.photo} />
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            {data.name}
            <BadgeCheck size={18} className="text-sky-400" />
          </h2>

          <p className="flex items-end gap-2">
            <Mail size={16} />
            {data.email}
          </p>

          <p className="text-sm text-gray-300">
            Lorem ipsum dolor elit. Libero dicta nemo unde et facilis
            voluptatibus in laboriosam natus!
          </p>

          <p className="flex items-center gap-2">
            <Briefcase size={16} />
            {data.profession}
          </p>
        </div>
      </div>
    </div>
  );
}
