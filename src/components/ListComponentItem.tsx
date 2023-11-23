import { useState } from "react";
import React from "react";
import { DataList } from "../App";

export default function ListComponentsItem(props: DataList) {
  const [flag, setFlag] = useState<boolean>(false);

  //destructuring props
  const { id, title, albumId, url, thumbnailUrl } = props;

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
        <div className="content">
          <p>{`id: ${id}`}</p>
          <p>{`albumId: ${albumId}`}</p>
          <p> {`title: ${title}`}</p>
          <p>{`url: ${url}`}</p>
          <p>{`thumbnailUrl: ${thumbnailUrl}`}</p>
        </div>
      ) : null}
    </li>
  );
}
