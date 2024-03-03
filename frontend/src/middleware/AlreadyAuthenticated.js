import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { SignIn as AuthLayout } from "views/auth/signIn";


export function AlreadyAuthenticated({children}) {
  const loginData = useAppSelector((state) => state.value);
  const location = useLocation();
  return loginData ? (
    <Redirect to={"/"} state={{ from: location }} replace />
  ) : (
    children
  );
}