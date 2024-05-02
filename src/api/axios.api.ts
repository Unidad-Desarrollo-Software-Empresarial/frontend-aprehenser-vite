import axios from "axios";

export const api = axios.create({
    baseURL: "https://aprehenser.pucesi.edu.ec/index.php/api",
})