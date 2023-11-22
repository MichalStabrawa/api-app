import ListComponentItem from "./ListComponentItem";
import styles from "./ListComponent.module.css";

export default function ListComponents(props) {
  return (
    <ul className={styles.list}>
      {props.data.map((el) => {
        const { id, url, thumbnailUrl, title, albumId } = el;

        return (
          <ListComponentItem
            key={id}
            url={url}
            thumbnailUrl={thumbnailUrl}
            title={title}
            album={albumId}
            id={id}
          />
        );
      })}
    </ul>
  );
}
