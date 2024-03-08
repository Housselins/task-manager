"use client"
import styles from "./Login.module.css"

function Login() {
    return(
      <div className={styles.containerLogin}>
        
        <div className={styles.cardLogin}>
            <h1 className={styles.colorTitle}>LOGIN</h1>
            <label className={styles.colorLabels}>Username</label>
            <input></input>
            <label className={styles.colorLabels}>Password</label>
            <input></input>
            <button className={styles.btnSign}>Login</button>
        </div>
      </div>
    )
  }
  
  export default Login