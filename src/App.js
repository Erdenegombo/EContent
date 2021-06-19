import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Classes from "./containers/Classes/Classes";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/eb" component={Classes}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
