
import './App.css';
import Banner from './components/Banner';
import Contain from './components/Contain';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Scrolls from './components/Scrolls';



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Contain/>
      <Scrolls/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
