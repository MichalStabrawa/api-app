import { useState } from "react";
import styles from "./ListComponentItem.module.css";
export default function ListComponentsItem(props) {
  const [flag, setFlag] = useState(false);

  //destructuring props
  const { id, title, album, url, thumbnailUrl } = props;

  const handleImg = () => {
    setFlag(!flag);
  };

  return (
    <li>
      <figure>
        <img
          src={flag ? url : thumbnailUrl}
          onClick={handleImg}
          alt={title}
        ></img>
        <figcaption>{title}</figcaption>
      </figure>
      {flag ? (
        <div className={styles.content}>
          <p>{`id: ${id}`}</p>
          <p>{`albumId: ${album}`}</p>
          <p> {`title: ${title}`}</p>
          <p>{`url: ${url}`}</p>
          <p>{`thumbnailUrl: ${thumbnailUrl}`}</p>
        </div>
      ) : null}
    </li>
  );
}
