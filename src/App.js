import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import Movies from './components/Homepage/Movies/Movies';
import Series from './components/Homepage/Series/Series';
import Details from './components/Homepage/Details/Details';
import Search from './components/Homepage/Search/Search';
import Footer from './components/Footer/Footer';
import Trending from './components/Homepage/Movies/Trending/Trending';

const App = () => {
  return (
    <div className="App">
      
      <Navbar />      
      
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/movies" exact component={Movies}/>
        <Route path="/series" exact component={Series}/>
        <Route path="/details/:id" component={Details}/>
        <Route path="/trending/movies" exact component={Trending}/>
      </Switch>
      
      <Footer />

    </div>
  );
}

export default App;
