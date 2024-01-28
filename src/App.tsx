import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.scss";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPageLazy />} />
            <Route path="/about" element={<AboutPageLazy />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
