import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("userAuth");
    if (!isLogin) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
