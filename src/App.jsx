import './App.css';
import SecurityList from "./components/SecurityController/SecurityList";
import EditSecurity from "./components/SecurityController/EditSecurity";
import AddSecurity  from "./components/SecurityController/AddSecurity";
import TradeList from './components/TradeController/TradeList';
import AddTrade from './components/TradeController/AddTrade';
import EditTrade from './components/TradeController/EditTrade';
import SecurityRange from './components/SecurityController/SecurityByDate';
import { Dashboard } from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container body-content">
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/sc" exact component={SecurityList} />
              <Route path="/editsecurity/:id" exact component={EditSecurity} />
              <Route path="/addsecurity" exact component={AddSecurity} />
              <Route path="/td" exact component={TradeList} />
              <Route path="/edittrade/:id" exact component={EditTrade} />
              <Route path="/addtrade" exact component={AddTrade} />
              <Route path="/securityrange" exact component={SecurityRange} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;