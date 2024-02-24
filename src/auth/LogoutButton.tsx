"use client";

import { signOut } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  return (
    <button
      className="btn btn-accent"
      onClick={async () => {
        await signOut();
      }}
    >
      Login
    </button>
  );
};
