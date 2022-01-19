import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Services from './pages/Services'
import About from './pages/About'
import SuccesStory from './pages/SuccesStory'
import Gallery from './pages/Gallery'
import Specialists from './pages/Specialists'
import Blog from './pages/Blog'
import Contacts from './pages/Contacts'

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
         <Switch>
             <Route exact path='medicalweb/' component={Home}  />
             <Route  path='medicalweb/about' component={About}  />
             <Route  path='medicalweb/services' component={Services}  />
             <Route  path='medicalweb/succesStory' component={SuccesStory}  />
             <Route  path='medicalweb/gallery' component={Gallery}  />
             <Route  path='medicalweb/specialists' component={Specialists}  />             
             <Route  path='medicalweb/blog' component={Blog}  />
             <Route  path='medicalweb/contacts' component={Contacts}  />

         </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
