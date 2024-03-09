"use client";
import LoginGoogleButton from "@/app/LoginButton";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={`h-full w-full ${styles.containerLogin}`}>
      <div className={styles.cardLogin}>
        <h1 className={styles.colorTitle}>LOGIN</h1>
        <label className={styles.colorLabels}>Username</label>
        <input></input>
        <label className={styles.colorLabels}>Password</label>
        <input></input>
        <div className="flex flex-wrap flex-col h-20 w-full my-8 gap-3">
          <button className={"bg-blue-400 text-white rounded-[calc(8px)]"}>
            Login
          </button>
          <LoginGoogleButton />
        </div>
      </div>
    </div>
  );
}

export default Login;
