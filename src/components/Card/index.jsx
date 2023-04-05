import styles from "./Card.module.css";
import favIcon from "./favorite_outline.png";
import unFavIcon from "./favorite.png";
import { useFavoriteContext } from "../../hooks/FavoriteContext";
import { Link } from "react-router-dom";

export default function Card({ id, title, cover, plot }) {
  const { favorite, toggleFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = isFavorite ? unFavIcon : favIcon;

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <Link to={`/${id}`}>
          <img src={cover} alt={title} className={styles.cover} />
        </Link>
      </div>
      <h2>{title}</h2>
      <p>{plot}</p>
      <img
        onClick={() => toggleFavorite({ id, title, cover })}
        src={icon}
        alt="Mark as favorite"
        className={styles.favIcon}
      />
    </div>
  );
}
