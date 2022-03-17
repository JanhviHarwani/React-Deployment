import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import ErrorPage from "./components/ErrorPage";
import React from "react";
const LazyProfile = React.lazy(() => import("./components/Profile"));
const LazyDashboard = React.lazy(() => import("./components/Dashboard"));
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile Page</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <div>
            <p>
              Application mode is : <b>{process.env.REACT_APP_BASE}</b>
            </p>
          </div>
          <br />
          <br />
          <Suspense fallback={<ErrorPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<LazyProfile />} />

              <Route path="/dashboard" element={<LazyDashboard />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
