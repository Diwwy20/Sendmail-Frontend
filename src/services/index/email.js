import axios from "axios";

export const sendMail = async ({ formData }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        const { data } = await axios.post('https://sendmail-backend-api.up.railway.app/api/mail/send-mail', formData, config);
        return data;
    } catch (error) {
        if(error.response && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        throw new Error(error.message);
    }
};