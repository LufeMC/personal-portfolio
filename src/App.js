import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  const [background, setBackground] = useState('white')

  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <NavBar color = {background}/>
      <RenderRoutes routes={ROUTES} background = {background} changeBackground = {setBackground}/>
    </div>
  );
}

export default App;
