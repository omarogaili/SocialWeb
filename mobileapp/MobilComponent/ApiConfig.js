import { useState, useEffect } from "react";
const ConfigrationApiUrl =() =>{
    const [apiUrl, setApiUrl] = useState();
    useEffect(() => {
        const fetchConfig = async () => {
            const response = await fetch('/config.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setApiUrl(data);
        }
        fetchConfig();
    }, []);
    return apiUrl;
}
export default ConfigrationApiUrl;