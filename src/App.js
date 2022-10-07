import React from 'react';
import './App.css';
import Element from './elevents/element';

function App() {
  const[species, setSpecies] = React.useState([])
  React.useEffect(() =>{
    async function fetchSpecies(){

      fetch('https://swapi.dev/api/species/')
      .then((res) => res.json())
      .then((json) => setSpecies(json.results))
    }
    fetchSpecies()
  }, [])
  console.log(species)
  return (
    <div className="App">
      {species.map(({url, name, classification, designation, average_height, average_lifespan, eye_colors, hair_colors, language}) =>{
        return(
          <li key={url}>
            <Element name={name} classification={classification} designation={designation} average_height={average_height} average_lifespan={average_lifespan} eye_colors={eye_colors} hair_colors={hair_colors} language={language} />
          </li>
        )
      }

    )}

    </div>
  );
}

export default App;
