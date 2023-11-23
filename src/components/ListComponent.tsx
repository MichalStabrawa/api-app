import ListComponentItem from "./ListComponentItem";

import React from "react";
import { DataList } from "src/App";

export default function ListComponents(props: { data: { id: number; url: string; thumbnailUrl: string; title: string; albumId: number; }[]; }) {
  return (
    <ul className="list">
      {props.data.map((el: DataList) => {
        const { id, url, thumbnailUrl, title, albumId } = el;

        return (
          <ListComponentItem
            key={id}
            url={url}
            thumbnailUrl={thumbnailUrl}
            title={title}
            albumId={albumId}
            id={id}
          />
        );
      })}
    </ul>
  );
}
