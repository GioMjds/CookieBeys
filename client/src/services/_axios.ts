import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const login = async (email: string, password: string) => {
    try {
        const response = await API.post('/api/login', {
            email: email,
            password: password
        }, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(`Error logging in: ${error}`);
        throw error;
    }
};

export const registerUser = async (email: string, password: string, confirmPass: string) => {
    try {
        const response = await API.post('/api/register', {
            email: email,
            password: password,
            confirmPass: confirmPass
        }, {
            withCredentials: true
        });
        return response;
    } catch (error) {
        console.error(`Error registering user: ${error}`);
        throw error;
    }
};

export const sendOtp = async (email: string) => {
    try {
        const response = await API.post('/api/email-otp', {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error(`Error sending OTP: ${error}`);
        throw error;
    }
};

export const logOut = async () => {
    try {
        const response = await API.post('/api/logout', {});
        return response;
    } catch (error) {
        console.error(`Error logging out: ${error}`);
        throw error;
    }
};