import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeTemplates from './templates/HomeTemplates';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Register from './pages/Register';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallbackDemo from './pages/UseCallbackDemo/UseCallbackDemo';
import UseMemoDemo from './pages/Hooks/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
import CustomHookDemo from './pages/Hooks/CustomHookDemo';
import DemoAntD from './pages/Hooks/DemoAntD';
import Films from './pages/Hooks/Films';
import { store } from './redux/ConfigureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplates/>}>
        <Route index element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='use-state-demo' element={<UseStateDemo/>}></Route>
        <Route path='use-effect' element={<UseEffectDemo/>}></Route>
        <Route path='use-callback-demo' element={<UseCallbackDemo />}></Route>
        <Route path='use-memo-demo' element={<UseMemoDemo />}></Route>
        <Route path='use-ref-demo' element={<UseRefDemo />}></Route>
        <Route path='demo-custom-hook' element={<CustomHookDemo />}></Route>
        <Route path='demo-AntD' element={<DemoAntD/>}></Route>
        <Route path='fimls' element={<Films/>}></Route>
        <Route path='detail'>
          <Route path=':id' element={<Detail/>}></Route>
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
