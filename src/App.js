import './App.css';
import './List.css'
import Rendering from './Rendering'
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
import Log from './Log';
import Otp from './Otp';

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
        {/* <Rendering/> */}
      <Router>
        <Switch>
        
          <PublicRoute exact path='/' component={Log} />
          <PublicRoute path='/reg' component={Reg} />
          <PublicRoute path='/Fp' component={Fp} />
          <PublicRoute path='/Otp' component={Otp} />
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
