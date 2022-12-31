import React, { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useAuthState } from "../../hooks/useAuthState";
import Concert from "../Concert";
import Login from "../Login";

//* Hooks React
//! useState
//! useMemo
//! useReduce
//! useCallback
//! useRouter
//! useNavigate

//* Own hooks
//! Custom Hooks

const MainContent = () => {
  const { checkAuthToken } = useAuthState();
  const [status, setStatus] = useState("loading");

  const modifyStatus = (newStatus:string) => {
    setStatus(newStatus)
  }

  useEffect(() => {
    setStatus(checkAuthToken());

    window.addEventListener('storage', ()=> {
      localStorage.getItem('token') ? setStatus('auth') : setStatus('no-auth')
    })

    return () => {};
  }, []);

  if (status === "loading") {
    return <h3>Loading...</h3>;
  }

  return (
    <Routes>
      {status === "no-auth" ? (
        <>
          <Route path="/auth/*" element={<Login setStatus={modifyStatus} />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Concert setStatus={modifyStatus} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default MainContent;
