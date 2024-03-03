import React from "react";
import { useAppSelector } from "../store/hooks";
import { Redirect, useLocation } from "react-router-dom";
import {Dashboard as AdminLayout} from "layouts/admin/index";

export function AuthenticatorMiddleware() {
  const loginData = useAppSelector((state) => state.value);
  const location = useLocation();
  return loginData ? (
    <AdminLayout/>
  ) : (
    <Redirect to="/sign-in" state={{ from: location }} replace />
  );
}