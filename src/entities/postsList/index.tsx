import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList } from "react-window";
import { AutoSizer } from "react-virtualized";
import InfiniteLoader from "react-window-infinite-loader";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api/";

import { IPost } from "../../shared/types";
import { ROW_HEIGHT } from "../../shared/config";

const PostsList = () => {
  const [items, setItems] = useState<IPost[]>([]);

  useEffect(() => {
    getData(API.allPostUrl).then((data) => setItems(data));
  }, []);

  const Row = ({ index, style }: { index: number; style: any }) => {
    const rowRef = useRef<any>({});

    return (
      <li style={style}>
        <div className="container" ref={rowRef}>
          {items[index].title}
        </div>
      </li>
    );
  };

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return getData(API.allPostUrl).then((data: any[]) => {
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
            <FixedSizeList
              ref={ref}
              height={height}
              itemCount={items.length}
              itemSize={ROW_HEIGHT}
              width={width}
              innerElementType={"ul"}
              onItemsRendered={onItemsRendered}
            >
              {Row}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default PostsList;
