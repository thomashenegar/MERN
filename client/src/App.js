import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import AddPirate from './views/AddPirate';
import OnePirate from './views/OnePirate';
import 'bootstrap/dist/css/bootstrap.css';
function App(){
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AddPirate path="/pirate/new"/>
        <OnePirate path="/pirate/:id"/>
      </Router>

    </div>
  );
}

export default App;
