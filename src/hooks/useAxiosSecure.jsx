import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const AxiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logoutUser, setLoader } = useAuth()
    const naviget = useNavigate()
    AxiosSecure.interceptors.response.use(function (response) {

        return response;
    }, function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth).then(() => {
                // Sign-out successful.
                naviget("/login")
              }).catch((error) => {
                // An error happened.
              });
        }
    });
    return AxiosSecure
};

export default useAxiosSecure;