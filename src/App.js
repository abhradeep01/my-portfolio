import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import LayOut from './pages/LayOut';
import AboutSection from './pages/AboutSection';
import SkillsSection from './pages/SkillsSection';
import ProjectSection from './pages/ProjectSection';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<AboutSection wdth={true} />}/>
          <Route path='/skill' element={<SkillsSection wdth={true} />}/>
          <Route path='/projects' element={<ProjectSection wdth={true}/>}/>
          <Route path='/contact' element={<Contact wdth={true}/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
