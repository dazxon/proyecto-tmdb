import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

import Spinner from "../commons/spinner";
import { useAuthContext } from "../context/user";
import { useInput } from "../hooks/useInput";
import { log, success, error } from "../utils/logs";

export default () => {
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const { user, setUser } = useAuthContext();
  const history = useHistory();
  const email = useInput("email");
  const password = useInput("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const { data } = await axios.post("/api/login", {
        email: email.value,
        password: password.value,
      });
      setUser(data);
      setLoading(false);
      history.push("/secret");
    } catch ({ response }) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (user.email) history.push("/");
  }, [user]);

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-4 text-center">Sign in to your account</h2>
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
            {hasError && (
              <p className="text-danger mb-3">Invalid Credentials</p>
            )}
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-weight-bold text-decoration-none"
                >
                  Forgot your password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? <Spinner /> : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
