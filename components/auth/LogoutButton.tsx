"use client";

import { signOut } from "next-auth/react";
import React from "react";

export const LogoutButton = () => {
  return (
    <button
      className="btn btn-error"
      onClick={async () => {
        await signOut();
      }}
    >
      Logout
    </button>
  );
};
