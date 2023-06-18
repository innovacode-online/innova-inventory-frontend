import axios from "axios";

const inventoryDb = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Accept': 'application/json',
        // 'X-Requested-With' :'XMLHttpRequest',
        // Accept:'image/png',
        
    }
});

export default inventoryDb;