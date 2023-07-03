
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './View/Landing/Landing';
function App() {


  return (
    <>
    <Routes>
      <Route path={"/"} Component={Landing} />
    </Routes>
    </>
  )
}

export default App
