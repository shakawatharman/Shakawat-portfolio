import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import Projects from './Pages/Home/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
      
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/projects/:projectId">
        <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
