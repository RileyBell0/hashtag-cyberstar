import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BucketList from "./pages/projects/BucketList";
import Wumpus from "./pages/projects/Wumpus";
// import RayTracer from "./pages/projects/RayTracer";
import Tupgorg from "./pages/projects/Tupgorg";
import GitHub from "./pages/GitHub";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ThisSite from "./pages/projects/ThisSite";
import Credit from "./pages/Credit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/bucket-list" element={<BucketList />} />
        <Route path="/projects/wumpus" element={<Wumpus />} />
        {/* <Route path="/projects/raytracer" element={<RayTracer />} /> */}
        <Route path="/projects/tupgorg" element={<Tupgorg />} />
        <Route path="/projects/this-site" element={<ThisSite />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
