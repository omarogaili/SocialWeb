import { useNavigate } from "react-router-dom";
export default function Signout() {
    const navigate = useNavigate();
    const handleSignout = () => {
        localStorage.removeItem('userId');
        navigate('/Sing-In');
    };
    return (
        <button onClick={handleSignout}>Sign out</button>
    );
}