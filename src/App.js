import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Workspaces from './Components/Workspaces';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/workspaces" component={Workspaces} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
