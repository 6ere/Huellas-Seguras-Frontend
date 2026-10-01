import { Routes,BrowserRouter,Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Veterinaria from "../pages/Veterinaria/Veterinaria";
import NotFound from "../pages/Errors/404-NotFound/NotFound";

export function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/veterinarias" element={<Veterinaria/>}/>
        
        </Route>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}