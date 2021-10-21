import './App.css';
import UserTable from './components/UserTable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={UserTable} />
          <Route path='/user/:id' component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
