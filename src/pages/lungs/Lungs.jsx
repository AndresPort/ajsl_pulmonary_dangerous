import { Outlet, useLocation} from "react-router";
import "./Lungs.css";

const Lungs = () =>{
    const location = useLocation();
    const userData = location.state?.userData;
    return(
        <>
        <h1>Pulmones</h1>
        <p>{userData?.displayName}</p>
        <Outlet/>
        </>
    )
}

export default Lungs;