import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCars, filterCards } from "../redux/action";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCars(event.target.value))
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled>Order By:</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled>Filter By:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {
                myFavorites.map((character) => {
                    return (
                        <div>
                            <div >
                                <Link to={`/detail/${character.id}`}>
                                    <img width={300} height={300} src={character.image} alt="" />
                                    <p>More Information for: </p>
                                    <span>{character.name}</span>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;