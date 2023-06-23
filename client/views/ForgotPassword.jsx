import React, { useState } from "react";

import { useInput } from "../hooks/useInput";

export default ({ setUset }) => {
  const email = useInput("email");

  const [userEmail, setUserEmail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserEmail(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="h4 mb-4 text-center">Reset your password</h2>
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
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                <span className="position-absolute left-0 d-flex align-items-center pl-3">
                  <svg
                    className="h-5 w-5 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Forgot Password
              </button>
            </div>
          </form>
        </div>
        {userEmail ? "Se ha enviado un email para restablecer contrasenia" : ""}
      </div>
    </div>
  );
};
