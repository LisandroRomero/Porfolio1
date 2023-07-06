
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './View/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
function App() {


  return (
    <div >
      <NavBar/>
    <Routes>
      <Route path={"/"} Component={Landing} />
      
    </Routes>
    </div>
  )
}

export default App
