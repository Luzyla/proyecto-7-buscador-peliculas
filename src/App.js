import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import Movies from './components/Homepage/Movies/Movies';
import Series from './components/Homepage/Series/Series';
import Details from './components/Homepage/Details/Details';
// import Search from './components/Homepage/Search/Search';
import Footer from './components/Footer/Footer';
import Trending from './components/Homepage/Movies/Trending/Trending';
import TopRated from './components/Homepage/Movies/TopRated/TopRated';
import Upcoming from './components/Homepage/Movies/Upcoming/Upcoming';
import NowPlaying from './components/Homepage/Movies/NowPlaying/NowPlaying';
import TrendingSeries from './components/Homepage/Series/Trending/Trending';
import TopRatedSeries from './components/Homepage/Series/TopRated/TopRated';
import NowPlayingSeries from './components/Homepage/Series/NowPlaying/NowPlaying';


const App = () => {

  return (
    <div className="App">
      
      <Navbar />      
      
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/movies" exact component={Movies}/>
        <Route path="/series" exact component={Series}/>
        <Route path="/details/:id" component={Details}/>
        {/* Nota que parecidos son los siguientes componentes entre si
        No esta mal que haya uno por ruta, pero cada uno podria llamar al mismo componente 
        o al mismo hook, o ambas!, para que tu codigo no quede tan repetitivo. */}
        <Route path="/movies/trending" exact component={Trending}/>
        <Route path="/movies/top-rated" exact component={TopRated}/>
        <Route path="/movies/upcoming" exact component={Upcoming}/>
        <Route path="/movies/now-playing" exact component={NowPlaying}/>
        <Route path="/series/trending" exact component={TrendingSeries}/>
        <Route path="/series/top-rated" exact component={TopRatedSeries}/>
        <Route path="/series/now-playing" exact component={NowPlayingSeries}/>
        {/* falta un 404 */}
      </Switch>
      
      <Footer />

    </div>
  );
}

export default App;
