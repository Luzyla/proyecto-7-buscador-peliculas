import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <div className="App">
      <section className="Navbar">
        <Navbar />      
      </section>

      <section className="Homepage">
        <Homepage />
      </section>


    </div>
  );
}

export default App;
