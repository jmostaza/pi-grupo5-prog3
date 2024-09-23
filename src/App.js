import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./components/notFound/notFound"
import Cartelera from './pages/Cartelera'
import Populares from './pages/Populares'
import PeliculaDetail from './pages/PeliculaDetail'
import SearchResults from './pages/SearchResults';
import Favorite from './pages/Favorite';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/populares' component={Populares}/>
        <Route path='/cartelera' component={Cartelera}/>
        <Route path='/movies/:id' component={PeliculaDetail}/>
        <Route path='/searchresults' component={SearchResults}/>
        <Route path='/favorite' component={Favorite}/>
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;