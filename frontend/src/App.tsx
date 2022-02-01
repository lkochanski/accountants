import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ArticleDetails from "./pages/ArticleDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="App">

        <Router>
            <SiteHeader />
            <Routes>
                <Route path={"/"} element={<Homepage/>} />
                <Route path={"/category"} element={<Category/>} />
                <Route path={"/article-details/:id"} element={<ArticleDetails/>} />
            </Routes>
        </Router>
      <h3>React Strapi</h3>
    </div>
  );
}

export default App;
