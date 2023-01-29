import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return children;
};

export default ProtectRoute;
