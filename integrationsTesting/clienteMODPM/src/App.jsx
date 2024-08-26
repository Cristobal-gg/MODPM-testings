import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TestingsPage } from './pages/testingsPage';
import { Navigation } from './components/Navigation';
import { Maps } from './pages/Map';
import { Home } from './pages/home';
import { Login } from './pages/Login';
import { TestingsFormPage } from './pages/testingsFormPage';
import { Prueba } from './pages/prueba';

function App(){
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/maps" element={<Maps/>} />
          <Route path="/testings" element={<TestingsPage />} />
          <Route path="/testingsForm" element={<TestingsFormPage />} />
          <Route path="/prueba" element={<Prueba/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;