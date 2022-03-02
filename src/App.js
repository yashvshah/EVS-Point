import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import ResetPass from './pages/ResetPass';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpass" element={<ResetPass/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <ResetPass/> */}
    {/* <Deshboard/> */}
    </div>
  );
}

export default App;
