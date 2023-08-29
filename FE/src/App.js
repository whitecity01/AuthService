//import LoginForm from './LoginForm';
import MainPage from "./View/MainPage";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import RegisterPage from "./View/RegisterPage";
import LoginPage from "./View/LoginPage";
import SuccessPage from "./View/SuccessPage";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/RegisterPage' element={<RegisterPage/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
