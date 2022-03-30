import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/pages/home/Home";

import Layout from "./views/pages/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
