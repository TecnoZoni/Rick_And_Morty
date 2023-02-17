import style from './App.module.css'
import Card from './components/Cards/Card'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'


function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acces, setAcces] = useState(false);

  const username = "agustin@gmail.com";
  const password = "123asd";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcces(true)
      navigate("/home")
    } else {
      alert("Usuario no registrado")
    }
  }

  useEffect(() => {
    !acces && navigate("/")
  }, [acces])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(characters => characters.id !== id)
    )
  }

  return (
    <div className={style.App}>
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}

      <Routes>
        <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <div className={style.space}></div>
      <div>
      </div>
    </div>
  )
}

export default App
