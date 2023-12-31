import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const country = "us";
  return (
    <div>
      <Router>
        <Navbar title="article" />
        <Routes>
          <Route
            path="/"
            element={
              <News key="general" country={country} category="general" />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News key="business" country={country} category="business" />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                country={country}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={<News key="health" country={country} category="health" />}
          ></Route>
          <Route
            path="/science"
            element={
              <News key="science" country={country} category="science" />
            }
          ></Route>
          <Route
            path="/sports"
            element={<News key="sports" country={country} category="sports" />}
          ></Route>
          <Route
            path="/technology"
            element={
              <News key="technology" country={country} category="technology" />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
