import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuthContext } from "../context/user";

import { BiFilm } from "react-icons/bi";

export default () => {
  const { user, setUser } = useAuthContext();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      setUser({});
      history.push("/");
      console.log("User logout");
    } catch ({ response }) {
      console.log(response.statusText);
    }
  };

  return (
    <div className="bg-primary text-white w-full">
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="">
          <Link to="/" className="d-flex">
            <BiFilm
              className="h-20 rounded-circle text-secondary"
              style={{ color: "black", fontSize: "48px" }}
            />
          </Link>
        </div>

        {user.email ? (
          <div className="d-flex">
            <h5 className="me-2 text-center">Bienvenido {user.name}</h5>

            <button className="btn btn-light" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex">
            <Link to="/login">
              <button className="btn btn-outline-light me-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-light">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
