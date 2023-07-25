import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand } from "./components";

import "./App.css";
import Layout from "./containers/Layout/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Header />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/whatgpt3" element={<WhatGPT3 />} />
      <Route path="/features" element={<Features />} />
      <Route path="/possibility" element={<Possibility />} />
      <Route path="/cta" element={<CTA />} />
      <Route path="/blog" element={<Blog />} />
      <Route index element={<Footer />} />
    </Route>
  </Routes>
);

export default App;
