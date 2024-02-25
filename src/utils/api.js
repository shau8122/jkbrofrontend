import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const validateUser = async (token) => {
    try {
        console.log(token);
        const res = await axios.post(`${baseUrl}users/login`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const userDetails = res.data;
        
        // Store user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        console.log('Response:', res.data);
        return userDetails; // Return the user details
    } catch (error) {
        // Log the error for debugging
        console.error('Error validating user:', error.message);
        throw error; // Rethrow the error to handle it at the calling site if needed
    }
};

export default validateUser;
