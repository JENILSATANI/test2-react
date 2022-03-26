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

// const currentUserSubject = localStorage.getItem('token');

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       currentUserSubject ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           from=''
//           to={{
//             pathname: "/"
//           }}
//           noThrow
//         />
//       )
//     }
//   />
// );

// const PublicRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       currentUserSubject === null ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           from=''
//           to={{
//             pathname: "/Mlist"
//           }}
//           noThrow
//         />
//       )
//     }
//   />
// );

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/'component={List}/> */}
          <Route exact path='/' component={Login} />
          <Route exact path='/reg' component={Reg} />
          <Route exact path='/Fp' component={Fp} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Mlist' component={Mlist} />
          <Route exact path='/addmedicine' component={Am} />
          <Route exact path='/Userlist' component={Userlist} />
          <Route exact path='/Editmedicine/:id' component={Editmedision} />
          <Route exact path='/Logout' component={Logout} />


        </Switch>

      </Router>

    </div>
  );
}

export default App;
