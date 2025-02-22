import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";

const Home = () => {
    const navigate =  useNavigate();

    const handleClick =  useCallback(() => {
        navigate('/lungs', { state: { userData: {displayName: 'John Doe'} } });
    }, [navigate]);

    return (
        <>
        <h1>Home</h1>
        <button onClick={handleClick}>Pulmones</button>
        </>
        
    )
}

export default Home;