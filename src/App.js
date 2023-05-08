import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
   <>
    <Routes> 
      <Route path='/' element = {<Layout />}>
        <Route index element ={<Home />} /*Defines home component template for every page *//> 
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
   </>
  )
}

export default App;
