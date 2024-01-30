import React from "react";
import { FixedSizeList } from "react-window";
import { AutoSizer } from "react-virtualized";
import InfiniteLoader from "react-window-infinite-loader";
import Row from "../posItem";
import IPostList from "./types";
import listConfig from "./config";

const PostsList = ({
  isItemLoaded,
  itemCount,
  loadMoreItems,
  items,
}: IPostList) => {
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
              className=""
              ref={ref}
              height={height}
              itemCount={items.length}
              itemSize={listConfig.ROW_HEIGHT}
              width={width}
              innerElementType={"ul"}
              onItemsRendered={onItemsRendered}
            >
              {Row(items, listConfig.BLOCK_HEIGHT, listConfig.TEXT_LENGTH)}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default PostsList;
