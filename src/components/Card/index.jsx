import styles from "./Card.module.css";
import favIcon from "./favorite_outline.png";
import unFavIcon from "./favorite.png";
import { useFavoriteContext } from "../../hooks/FavoriteContext";

export default function Card({ id, title, cover }) {
  const { favorite, toggleFavorite } = useFavoriteContext();

  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite ? favIcon : unFavIcon;

  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <img
        onClick={() => toggleFavorite({ id, title, cover })}
        src={icon}
        alt="Mark as favorite"
        className={styles.favIcon}
      />
    </div>
  );
}
