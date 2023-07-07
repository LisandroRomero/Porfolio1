
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './View/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
function App() {


  return (
    <div >
      <NavBar/>
    <Routes>
      <Route path={"/"} Component={Landing} />
      <Route path={"/contact"} Component={Contact} />
    </Routes>
    </div>
  )
}

export default App
