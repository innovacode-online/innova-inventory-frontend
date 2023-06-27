import axios from "axios";

const inventoryDb = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    headers: {
        'Accept': 'application/json',
        Authorization : `Bearer ${ localStorage.getItem('AUTH_TOKEN') }`
        // 'X-Requested-With' :'XMLHttpRequest',
        // Accept:'image/png',
        
    }
});

export default inventoryDb;