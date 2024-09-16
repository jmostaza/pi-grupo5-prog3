import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home";


function App() {
  return (
   <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer/>
     

   </>
  );
}

export default App;