import React, { useEffect, useState } from "react";

import PostsList from "../../entities/postsList";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api";

import { IPost } from "../../shared/types";

const LoadList = () => {
  const [items, setItems] = useState<IPost[]>([]);
  const itemCount: number = items.length + 1;

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return getData(API.allPostUrl).then((data: any[]) => {
      setItems((prev) => [...prev, ...data]);
    });
  };
  const isItemLoaded = (index: number) => !!items[index];

  useEffect(() => {
    getData(API.allPostUrl).then((data) => setItems(data));
  }, []);

  return (
    <PostsList
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      items={items}
    />
  );
};

export default LoadList;