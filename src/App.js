import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { AboutUS } from './components/AboutUS'
import InfoCard from './components/InfoCard';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <AboutUS />
      <InfoCard/>
    </div>
  );
}

export default App;
