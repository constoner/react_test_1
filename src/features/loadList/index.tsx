import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import PostsList from "../../entities/postsList";

import { getData } from "../../shared/utils/utils";
import * as API from "../../shared/api";

import Loading from "../../shared/ui/loading";

import { IPost } from "../../shared/types";

const LoadList = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<IPost[]>([]);
  const itemCount: number = items.length + 1;

  const loadMoreItems = (startIndex: number, stopIndex: number) => {
    return getData(API.allPostUrl).then((data: any[]) => {
      setItems((prev) => [...prev, ...data]);
    });
  };
  const isItemLoaded = (index: number) => !!items[index];

  useEffect(() => {
    getData(API.allPostUrl)
      .then((data) => setItems(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loading />}
      <PostsList
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
        items={items}
      />
      <ScrollRestoration />
    </>
  );
};

export default LoadList;
