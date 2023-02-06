import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './Routes/MainPage/MainPage';
import Characters from './Routes//Characters/Characters';
import Episodes from './Routes/Episodes/Episodes';
import Locations from './Routes/Locations/Locations';
const App=()=>{
  return(
    <>
    <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Characters" element={<Characters/>}/>
        <Route path="/Locations" element={<Locations/>}/>
        <Route path="/Episodes" element={<Episodes/>}/>
    </Routes>
    </>
  )
}
export default App;