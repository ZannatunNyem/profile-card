import React, { useState } from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function Home() {
  const [profileData, setProfileData] = useState(null);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 p-6 mt-20">
      <ProfileForm setProfileData={setProfileData} />
      {profileData && <ProfileCard data={profileData} />}
    </div>
  );
}
