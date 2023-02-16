import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"
import button from "../Botton/Botton.module.css"

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);


    return (
        <div className={style.direction}>
            {/* // Card Detail complete */}
            <div className={style.Detail}>
                {/* Info of Card Detail */}
                <div className={style.col}>
                    <button className={button.Button} >
                        <Link to="/home" >Return</Link>
                    </button>
                    <h1>Nombre: {character?.name}</h1>
                    <p>Status: {character?.status}</p>
                    <p>Space: {character?.species}</p>
                    <p>Gender: {character?.gender}</p>
                    <p>Location: {character?.origin?.name}</p>
                </div>
                {/* Imege of Card Detail */}
                <img className={`${style.ImageDetail} ${style.col}`} src={character?.image} alt="" />
            </div>
        </div>
    )
}

export default Detail;