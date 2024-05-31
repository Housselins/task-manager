import { ENVIROMENT, ENVIROMENTS_CONFIG } from "@/lib/utils/Constants";
import axios from "axios";

/**
 * Conexion al backend
 */
const env = process.env.ENV ?? "PROD";
console.log(env);

const TaskCoreAxiosInstance = axios.create({ baseURL: ENVIROMENT === ENVIROMENTS_CONFIG.PROD ? "https://basilisk-precious-starfish.ngrok-free.app" : "http://localhost:3005" });

export default TaskCoreAxiosInstance;
