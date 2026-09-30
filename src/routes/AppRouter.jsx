import { Routes,BrowserRouter,Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Veterinaria from "../pages/Veterinaria/Veterinaria";

export function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/aliados" element={<Veterinaria/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    )
}