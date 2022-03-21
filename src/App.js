import './App.css';
import './List.css'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reg from './Reg'
import Fp from './Fp'
import List from './List';
import Profile from './Profile';
import Mlist from './Mlist'
import Am from './Am'
import Userlist from './Userlist';
import Editmedision from './Editmedision';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path='/'component={List}/> */}
          <Route exact path='/' component={Login} />
          <Route exact path='/Reg' component={Reg} />
          <Route exact path='/Fp' component={Fp} />
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Mlist' component={Mlist}/>
          <Route exact path='/addmedicine' component={Am}/>
          <Route exact path='/Userlist' component={Userlist}/>
          <Route exact path='/Editmedicine/:id' component={Editmedision}/>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
