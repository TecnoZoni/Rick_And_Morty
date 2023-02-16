import SearchBar from "../SearchBar/SearchBar"
import style from './Nav.module.css'
import { Link } from "react-router-dom"

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.navBar}>

            <div className={style.logo}>
                <Link to='/home'>
                    <img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="" />
                </Link>
            </div>
            <Link to="/">
                LOGOUT
            </Link>
            <Link to="/Home">
                HOME
            </Link>
            <Link to="/about">
                ABOUT
            </Link>
            <Link to="/favorites">
                FAVORITES
            </Link>
            <div className={style.searchBar}>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Nav;