import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";

import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
