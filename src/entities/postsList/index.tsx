import React, { useEffect, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import { AutoSizer } from "react-virtualized";

import { IPost } from "../../shared/types";
import { DOUBLEROW_HEIGHT } from "../../shared/config";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  const listRef = useRef<any>({});
  const rowHeights = useRef<any>({});

  const getRowHeight = (index: number) => {
    return rowHeights.current[index] || DOUBLEROW_HEIGHT;
  };

  const setRowHeight = (index: number, size: number) => {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  const Row = ({ index, style }: { index: number; style: any }) => {
    const rowRef = useRef<any>({});

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.offsetHeight);
      }
    }, [rowRef, index]);

    return (
      <li style={style}>
        <div className="container" ref={rowRef}>
          {posts[index].title}
        </div>
      </li>
    );
  };

  return (
    <AutoSizer style={{ width: "100%", height: "minHeight" }}>
      {({ height, width }) => {
        return (
          <List
            ref={listRef}
            height={height}
            itemCount={posts.length}
            itemSize={getRowHeight}
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
