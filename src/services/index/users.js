import axios from 'axios';

export const signUp = async ({ name, email, password, }) => {
    try {
        // const { data } = await axios.post('http://localhost:5000/api/user/register', {
        const { data } = await axios.post('https://sendmail-backend-api.up.railway.app/api/user/register', {
            name,
            email,
            password,
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
};

export const login = async ({ email, password }) => {
    try {
        // const { data } = await axios.post('http://localhost:5000/api/user/login', {
        const { data } = await axios.post('https://sendmail-backend-api.up.railway.app/api/user/login', {
            email,
            password
        });
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
};

export const getUserProfile = async ({ token }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        // const { data } = await axios.get('http://localhost:5000/api/user/profile', config);
        const { data } = await axios.get('https://sendmail-backend-api.up.railway.app/api/user/profile', config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
};

export const updateProfile = async ({ token, userData }) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        // const { data } = await axios.put('http://localhost:5000/api/user/update/profile', userData, config);
        const { data } = await axios.put('https://sendmail-backend-api.up.railway.app/api/user/update/profile', userData, config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message)
    }
};

export const updateProfilePicture = async ({ token, formData }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
        // const { data } = await axios.put('http://localhost:5000/api/user/update/profile/picture', formData, config);
        const { data } = await axios.put('https://sendmail-backend-api.up.railway.app/api/user/update/profile/picture', formData, config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message)
    }
}