import React from "react";
import { FixedSizeList as List } from "react-window";
import { AutoSizer } from "react-virtualized";

import { IPost } from "../../shared/types";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  const Row = ({ index, style }: { index: number; style: any }) => {
    return (
      <li style={style}>
        <div className="container">{posts[index].title}</div>
      </li>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            height={height}
            itemCount={posts.length}
            itemSize={35}
            width={width}
            innerElementType={"ul"}
          >
            {Row}
          </List>
        );
      }}
    </AutoSizer>
  );
};

export default PostsList;
