import React, { useState } from "react";

import PostsList from "../../entities/postsList";

import { IPost } from "../../shared/types";

const DataWrapper = ({ data }: { data: IPost[] }) => {
  const [items, setItems] = useState<IPost[]>(data);

  const itemCount: number = items.length + 1;

  const isItemLoaded = (index: number) => !!items[index];

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return setItems([...items, ...items]);
  };

  return (
    <PostsList
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      items={items}
    />
  );
};

export default DataWrapper;
