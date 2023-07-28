import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";

function App() {

  return (
    <BrowserRouter>
      <div className="min-height d-flex flex-column">
        <header>
          <Link to="/">
            <h1 className="my-5 text-center">Post a Post</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updateblog/:id" element={<Update />} />
          </Routes>
        </main>
        <footer>
          <p className="my-2 text-center">Abdul Aziz &copy; 2023</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
