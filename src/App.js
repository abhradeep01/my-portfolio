// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import NotFound from './components/NotFound';
import Skills from './components/Skills';
import HeaderProfile from './pages/HeaderProfile';
import Main from './pages/Main';
import NavBar from './pages/NavBar';
import { Outlet,Route,Routes } from 'react-router-dom';
const Layout =()=>{
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
const Home =()=>{
  return (
    <>
      <HeaderProfile/>
      <Main/>
    </>
  )
}
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About wdth={true}/>}/>
          <Route path='/skill' element={<Skills wdth={true}/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
