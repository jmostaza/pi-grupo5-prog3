import { Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./components/notFound/notFound"


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;