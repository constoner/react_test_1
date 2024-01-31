import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FixedSizeList } from "react-window";
import { AutoSizer } from "react-virtualized";
import InfiniteLoader from "react-window-infinite-loader";

import Row from "../posItem";

import listConfig from "./config";
import { ROUTES } from "../../shared/routes/";

import IPostList from "./types";

const goToPrevPost = (url: string, elem: HTMLDivElement) => {
  const item: number = +url.slice(ROUTES.postRefix.length);
  const scrollPosition: number =
    (item - listConfig.ROW_OFFSET) * listConfig.ROW_HEIGHT;
  elem.scrollTo(scrollPosition, 0);
};

const PostsList = ({
  isItemLoaded,
  itemCount,
  loadMoreItems,
  items,
}: IPostList) => {
  const listRef = useRef<any | null>(null);
  const location: { state: { prevState: string } } = useLocation();

  useEffect(() => {
    if (location.state) {
      goToPrevPost(location.state.prevState, listRef.current);
    }
  }, []);

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
              className="list-container"
              ref={(elem) => {
                ref(elem);
                listRef.current = elem;
              }}
              height={height}
              itemCount={items.length}
              itemSize={listConfig.ROW_HEIGHT}
              width={width}
              innerElementType={"ul"}
              onItemsRendered={onItemsRendered}
            >
              {Row(
                items,
                listConfig.BLOCK_HEIGHT,
                listConfig.CARD_WIDTH,
                listConfig.TEXT_LENGTH
              )}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
};

export default PostsList;
