import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../src/Comps/NavBar';
 
import AllTrainers from './Componenets/AllTrainers';
import AllPokemons from './Componenets/AllPokemons';
 import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import PageHome from './Componenets/PageHome';
import AddTrainer from './Componenets/AddTrainer';
import AddPokemon from './Componenets/AddPokemon';

 function App() {
  return (
    <Router>
      <div>
      <NavBar/>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/Trainers" element={<h1>llTrainers</h1> } />
          <Route path="/Pokemons" element={<h1>AllPokemons</h1>} />
          <Route path="/AddTrainer" element={<h1>AddTrainer</h1>} />
          <Route path="/AddPokemon" element={<h1>AddPokemon</h1>} />



          {/* 👇️ handle dynamic path */}
          {/**          <Route path="/users/:userId" element={<AllPokemons />} /> */}
          <Route path="/" element={<h1>PageHome</h1>} />
          {/* 👇️ only match this when no other routes match */}
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found </h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
