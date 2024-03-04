"use client";

import { signIn } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={async () => {
        await signIn();
      }}
    >
      Login
    </button>
  );
};
