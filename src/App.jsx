import './App.css';
import SecurityList from "./components/SecurityController/SecurityList";
import EditSecurity from "./components/SecurityController/EditSecurity";
import AddSecurity  from "./components/SecurityController/AddSecurity";
import TradeList from './components/TradeController/TradeList';
import AddTrade from './components/TradeController/AddTrade';
import EditTrade from './components/TradeController/EditTrade';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container body-content">
          <Router>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/sc" exact component={SecurityList} />
              <Route path="/editsecurity/:id" exact component={EditSecurity} />
              <Route path="/addsecurity" exact component={AddSecurity} />
              <Route path="/td/:id" exact component={TradeList} />
              <Route path="/edittrade/:id" exact component={EditTrade} />
              <Route path="/addtrade" exact component={AddTrade} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;