import React from "react";
import { Route, Routes } from "react-router-dom";
import Guests from "../pages/Guests";
import Layout from "../module/Layout";
import Room from "../pages/Room";

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
      <Route
      path="/room"
      element={
        <Layout>
          <Room />
        </Layout>
      }
      />
    </Routes>
  );
};

export default Router;
