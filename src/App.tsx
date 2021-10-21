import './App.css';
import UserList from './components/UserList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route path='/user/:id' component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
