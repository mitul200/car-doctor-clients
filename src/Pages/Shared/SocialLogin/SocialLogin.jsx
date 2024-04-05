/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);
  const handelGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className=" text-center">
        <button
          onClick={handelGoogleSingIn}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
