import style from "./Card.module.css"
import { Link } from "react-router-dom"
import button from "../Botton/Botton.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../redux/action";

function Card({ name, gender, species, image, onClose, id }) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav(true);
         dispatch(addFavorite({ name, gender, species, image, onClose, id }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      })
   }, [myFavorites])


   return (
      <div className={style.cardStyle}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <img width={300} height={300} src={image} alt="" />
            <p>More Information for: </p>
            <span>{name}</span>
         </Link>
         <br />
         {/* <p>Specie: {species}</p>
         <p>Gender: {gender}</p> */}
         <button className={button.Button} onClick={onClose}>Close</button>
      </div>
   );
}

export default Card;