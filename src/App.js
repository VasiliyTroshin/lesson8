
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index  element={<Register/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/welcome'} element={<Welcome/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
