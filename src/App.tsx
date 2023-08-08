
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './View/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import Proyects from './Components/Proyects/Proyects';
function App() {


  return (
    <div >
      <NavBar/>
    <Routes>
      <Route path={"/"} Component={Landing} />
      <Route path={"/Proyects"} Component={Proyects}   />
      <Route path={"/contact"} Component={Contact} />
    </Routes>
      <WhatsAppButton/>
    </div>
  )
}

export default App
