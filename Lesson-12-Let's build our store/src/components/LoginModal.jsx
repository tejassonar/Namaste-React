import React, { useContext } from "react";
import UserContext from "../utils/Context/UserContext";

const LoginModal = ({ loginModelRef }) => {
  const { setUserName } = useContext(UserContext);
  return (
    <dialog ref={loginModelRef} className="p-4 rounded-lg">
      <div className="text-xl font-bold text-slate-700 text-center ">Login</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const loginData = Object.fromEntries(data.entries());
          setUserName(loginData.userName);
          loginModelRef.current?.close();
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="userName"
          id="userName"
          className="border-[1px] mt-4 border-slate-200 bg-slate-100 focus:bg-white px-3 py-1 rounded-md w-[250px]"
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          className="border-[1px] border-slate-200 bg-slate-100 focus:bg-white px-3 py-1 rounded-md w-[250px]"
          placeholder="Password"
        />
        <button
          type="submit"
          className="p-2 px-4 bg-[#f55733] text-white font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
};

export default LoginModal;
