import React from "react";
import { IPost } from "../../shared/types";
import IRow from "./types";
import PostCard from "./ui";

const Row = (items: IPost[], height: number, length: number) => {
  return ({ index, style }: IRow) => {
    const { id, title, body } = items[index];
    return (
      <li style={style}>
        <div
          className="container w-50 position-relative"
          style={{ height: `${height}px` }}
        >
          <PostCard id={id} title={title} body={body} length={length} />
        </div>
      </li>
    );
  };
};

export default Row;
