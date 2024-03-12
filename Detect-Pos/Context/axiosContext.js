import React from "react";
import { createContext } from "react";
import axios from "axios";

export const axiosContext = createContext();

export const AxiosProvider = ({ children }) => {

    const publicAxios = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

    const post = async (url, data) => {
        try {
            const response = await axios.post(url, data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    const get = async (url) => {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <axiosContext.Provider value={{ publicAxios, post, get }}>
            {children}
        </axiosContext.Provider>
    );
}