import axios from "axios";

const TaskCoreAxiosInstance = axios.create({ baseURL: "http://localhost" });

export default TaskCoreAxiosInstance;
