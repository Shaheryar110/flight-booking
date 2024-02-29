import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ResponsiveDrawer from "../../Components/common/DashboardSidebar";

const Index = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    if (!currentUser) {
      navigate("/Login");
    }
  }, [currentUser]);
  return (
    <>
      <ResponsiveDrawer>
        <h1>Customer</h1>
      </ResponsiveDrawer>
    </>
  );
};

export default Index;
