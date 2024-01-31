import React from "react";

import PostCard from "./ui";

import IRow from "./types";
import { IPost } from "../../shared/types";

const Row = (items: IPost[], height: number, width: number, length: number) => {
  return ({ index, style }: IRow) => {
    const { id, title, body } = items[index];

    return (
      <li style={style}>
        <div
          className="container position-relative"
          style={{ height: `${height}px`, width: `${width}%` }}
        >
          <PostCard id={id} title={title} body={body} length={length} />
        </div>
      </li>
    );
  };
};

export default Row;
