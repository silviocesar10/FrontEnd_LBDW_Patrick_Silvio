//baseado em https://www.bezkoder.com/react-jwt-auth/
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const login = async (usuario, senha, lembrar) => {
    let logado = false;
    await axios
        .post(API_URL + "login", { usuario, senha, lembrar })
        .then((response) => {
            if (response.status === 200) {
                if (response.data.accessToken) {
                    const jsonString = JSON.stringify(response.data);
                    localStorage.setItem("user", jsonString);
                    logado = true;
                }
            } else {
                console.log("LOGIN_ERROR: " + response);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return logado;
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return true;
    } else {
        return false;
    }
};

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return { "x-access-token": user.accessToken };
    } else {
        return {};
    }
};
