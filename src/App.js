import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./components/notFound/notFound"
import Cartelera from './pages/Cartelera'
import Populares from './pages/Populares'
import PeliculaDetail from './pages/PeliculaDetail'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/populares' component={Populares}/>
        <Route path='/Cartelera' component={Cartelera}/>
        <Route path='/movies/:id' component={PeliculaDetail}/>
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;