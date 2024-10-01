import Register from "./components/Register"
import Default from "./components/Default";
import Login from "./components/Login"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';


function App() {
  return (<BrowserRouter>
   <Switch>
     <Route exact path="/" component={Default}></Route>
     <Route exact path="/register" component={Register}></Route>
     <Route exact path="/login" component={Login}></Route>
   </Switch>
  </BrowserRouter>)
}
export default App;
