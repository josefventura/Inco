import { Route, Routes } from "react-router-dom";
import Login from "../Components/LoginForm/Index";

export default ()=>{
    
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='Register' element={<h1>register</h1>}/>
            
        </Routes>
    )
}