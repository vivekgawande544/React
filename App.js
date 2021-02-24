import Navbar from "./navbar";
import HomePage from "./HomePage";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Create from "./create";
import BlogDetails from "./blogdetails";
import Temp from "./temp";


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          </div>
            <Switch>
                <Route exact path = "/">
                  <HomePage />
                </Route>
                <Route path ="/Create">
                  <Create />
                </Route>
                <Route  path="/Blogs/:id">
                  <BlogDetails />
                </Route>
                <Route path = "/temp">
                     <Temp />
                </Route>
            </Switch>
          </div>
    </Router>
  );
}

export default App;
