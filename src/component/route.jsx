import { BrowserRouter,Route,Routes} from "react-router-dom"
import { Details } from "./details"
import { Home } from "./home"



export function Routepath(){


    return(
        <>
        <BrowserRouter>
            <header className="bg-dark p-2">
                <div className="text-white h2 fw-bold ms-3 ">QuadB<span className="fw-normal h5">TECH</span></div>
            </header> 
            
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="details/:id" element={<Details />}></Route>
                <Route path="*" element={<><h2>Requested path not found.</h2></>}></Route>
                
            </Routes>
        </BrowserRouter>
        </>
    )
}