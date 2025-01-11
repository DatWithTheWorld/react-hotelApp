import React from "react";
import { Route, Routes } from "react-router-dom";
import Guests from "../pages/Guests";
import Layout from "../module/Layout";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Guests />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
