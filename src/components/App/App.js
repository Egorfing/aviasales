import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Final from "../Final/Final";
import Form from '../Form/Form';

export const PATHES = {
  PATH_TO_MAIN: "/",
  PATH_TO_FINAL: "/final",
}

function App() {
  return (
    <Router>
      <div className='App DF FDC JCC' >
        <div>
          <img className='color' src='./color.png' alt='background'/>
        </div>
        <div  id='background'>
        <Routes>
          <Route exact path={PATHES.PATH_TO_FINAL} element={<Final/>}/>
          <Route exact path={PATHES.PATH_TO_MAIN} element={<Form/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
