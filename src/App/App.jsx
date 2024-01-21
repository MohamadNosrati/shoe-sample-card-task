import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Shoes from "../pages/Shoes/Shoes";
import SingleShoe from "../components/SingleShoe";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas)
const App=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/shoes"} element={<Shoes/>}/>
                <Route path={"/shoes/:title"} element={<SingleShoe/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;