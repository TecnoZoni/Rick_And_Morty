import style from './SearchBar.module.css';
import { useState } from 'react';
import button from "../Botton/Botton.module.css"

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')

   const hacdleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input
            className={style.SearchBar}
            type='search'
            value={character}
            onChange={hacdleChange}
         />
         <button className={button.Button} onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
export default SearchBar;