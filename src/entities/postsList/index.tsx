import React, { useEffect, useRef, useState } from "react";
import { VariableSizeList as List } from "react-window";
import { AutoSizer } from "react-virtualized";
import InfiniteLoader from "react-window-infinite-loader";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api/";

import { IPost } from "../../shared/types";
import { DOUBLEROW_HEIGHT } from "../../shared/config";
// import { getMoreData } from "../../shared/utils/utils";

interface IList {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  posts: IPost[];
}

const PostsList = ({ hasNextPage, isNextPageLoading, posts }: IList) => {
  const [items, setItems] = useState<IPost[]>([]);

  useEffect(() => {
    setItems(posts);
  }, [posts]);

  // const listRef = useRef<any>({});
  // const rowHeights = useRef<any>({});

  // const getRowHeight = (index: number) => {
  //   return rowHeights.current[index] || DOUBLEROW_HEIGHT;
  // };

  // const setRowHeight = (index: number, size: number) => {
  //   listRef.current.resetAfterIndex(0);
  //   rowHeights.current = { ...rowHeights.current, [index]: size };
  // };

  const Row = ({ index, style }: { index: number; style: any }) => {
    const rowRef = useRef<any>({});

    // useEffect(() => {
    //   if (rowRef.current) {
    //     setRowHeight(index, rowRef.current.offsetHeight);
    //   }
    // }, [rowRef, index]);

    return (
      <li style={style}>
        <div className="container" ref={rowRef}>
          {items[index].title}
        </div>
      </li>
    );
  };

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: any[]) => {
        setItems((prev) => [...prev, ...data]);
      });
  };
  const itemCount: number = items.length + 1;
  const isItemLoaded = (index: number) => !!items[index];

  return (
    <AutoSizer style={{ width: "100%", height: "minHeight" }}>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }: any) => (
            <List
              ref={ref}
              height={height}
              itemCount={items.length}
              // itemSize={getRowHeight}
              itemSize={() => 24}
              width={width}
              innerElementType={"ul"}
              onItemsRendered={onItemsRendered}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default PostsList;
