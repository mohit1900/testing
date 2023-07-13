import classes from "./App.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Network from "./pages/Network";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "protected-route-react";
import { useEffect, useState } from "react";
import axios from "axios";
import Verify from "./pages/Verify";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginSuccess } from "./store/userSlice";
import Blank from "./pages/Blank";

function App() {
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, [userInfo]);

  const currentUrl = window.location.href;

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`http://localhost:4000/api/me/`, {
          headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        });
        dispatch(loginSuccess(data.user));
        setLoading(false);
        navigate("/home");
      } catch (e) {
        dispatch(loginFail());
        setLoading(false);
        console.log(e);
      }
    };
    loadUser();
  }, []);

  return (
    <div className={classes.container}>
      <Routes>
        <Route exact path="/" element={loading ? <Blank /> : <Login />} />
        <Route path="/verify/:token" element={<Verify />} />
        {!loading && <Route exact path="/signup" element={<SignUp />} />}
        <Route
          exact
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/network"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <Network />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/messages"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <Message />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
