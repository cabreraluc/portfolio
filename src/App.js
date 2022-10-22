import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import MainPage from "./components/MainPage"

function App() {
  return (
    <div className='App'>
      <Routes>
      <Route exact path='/' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
