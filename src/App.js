import { lazy, Suspense } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import HeaderProfile from './pages/HeaderProfile';
// import Main from './pages/Main';
import NavBar from './pages/NavBar';
import { Outlet,Route,Routes } from 'react-router-dom';

const MainComponent = lazy(()=>import('./pages/Main'));
const HeaderProfile = lazy(()=>import('./pages/HeaderProfile'));
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
      <Suspense fallback={<p>loading</p>}>
        <HeaderProfile/>
      </Suspense>
      <Suspense fallback={<p>loading</p>}>
        <MainComponent/>
      </Suspense>
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
          <Route path='/contact' element={<Contact wdth={true}/>}/>
          <Route path='/projects' element={<Projects wdth={true}/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
