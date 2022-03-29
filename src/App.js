import './App.css';
import './List.css'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Reg from './Reg'
import Fp from './Fp'
import For from './For';
import Profile from './Profile';
import Mlist from './Mlist'
import Am from './Am'
import Userlist from './Userlist';
import Editmedision from './Editmedision';
import Logout from './Logout';

const currentUserSubject = localStorage.getItem('token');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUserSubject ? (
        <Component {...props} />
      ) : (
        <Redirect
          from=''
          to={{
            pathname: "/"
          }}
          noThrow
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUserSubject === null ? (
        <Component {...props} />
      ) : (
        <Redirect
          from=''
          to={{
            pathname: "/Mlist"
          }}
          noThrow
        />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/'component={List}/> */}
          <PublicRoute exact path='/' component={Login} />
          <PublicRoute path='/reg' component={Reg} />
          <PublicRoute path='/Fp' component={Fp} />
          <PrivateRoute path='/Profile' component={Profile} />
          <PrivateRoute path='/Mlist' component={Mlist} />
          <PrivateRoute path='/addmedicine' component={Am} />
          <PrivateRoute path='/Userlist' component={Userlist} />
          <PrivateRoute path='/Editmedicine/:id' component={Editmedision} />
          <PrivateRoute path='/Logout' component={Logout} />


        </Switch>

      </Router>

    </div>
  );
}

export default App;
