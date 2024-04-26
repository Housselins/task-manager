import axios from "axios";

const TaskCoreAxiosInstance = axios.create({ baseURL: "http://localhost:3005/api/v1" });

export default TaskCoreAxiosInstance;
