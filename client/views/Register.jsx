import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks/useInput";

export default () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");
  const name = useInput("name");
  const lastname = useInput("lastname");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/api/register", {
        email: email.value,
        password: password.value,
        name: name.value,
        lastname: lastname.value,
      });
      setLoading(false);
      history.push("/login");
    } catch ({ response }) {
      setLoading(false);
      console.log(response.statusText);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-4 text-center">Create your account</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="mb-3">
              <input
                aria-label="Email address"
                type="text"
                required
                className="form-control"
                placeholder="Email address"
                {...email}
              />
            </div>
            <div className="mb-3">
              <input
                aria-label="Password"
                type="password"
                required
                className="form-control"
                placeholder="Password"
                {...password}
              />
            </div>
            <div className="mb-3">
              <input
                aria-label="Name"
                type="text"
                required
                className="form-control"
                placeholder="Name"
                {...name}
              />
            </div>
            <div className="mb-3">
              <input
                aria-label="Last Name"
                type="text"
                required
                className="form-control"
                placeholder="Last Name"
                {...lastname}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
