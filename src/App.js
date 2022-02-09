import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
      <NavBar/>
      <RenderRoutes routes={ROUTES}/>
    </div>
  );
}

export default App;
