import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { Profil } from "../Profil/Profil";
import { Security } from "../Security/Security";
import { Settings } from "../Settings/Settings";
import { ProfileBody, ProfileContent } from "./ProfileStyle";

export const Profile = () => {
  return (
    <ProfileContent>
      <ProfileHeader />
      <ProfileBody>
        <Routes>
          <Route path="profile" element={<Profil />} />
          <Route path="security" element={<Security />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </ProfileBody>
    </ProfileContent>
  );
};
