import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'
import { Link } from "react-router-dom"
import button from "../Botton/Botton.module.css"

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.navBar}>

            <div className={style.logo}>
                <Link to='/home'>
                    <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="" />
                </Link>
            </div>
            <Link className={button.Button} to="/">
                Logout
            </Link>
            <Link className={button.Button} to="/Home">
                Home
            </Link>
            <Link className={button.Button} to="/about">
                About
            </Link>
            <Link className={button.Button} to="/favorites">
                Favorites
            </Link>
            <div className={style.searchBar}>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Nav;