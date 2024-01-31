import React, { useState } from "react";

import PostsList from "../../entities/postsList";

import Loading from "../../shared/ui/loading";

import { useGetPostsQuery } from "../../app/api";
import { IPost } from "../../shared/types";

const Wrapper = ({ data }: { data: IPost[] }) => {
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

const LoadList = () => {
  const { data, isLoading } = useGetPostsQuery(0);

  return (
    <div className="position-relative h-100">
      {isLoading ? <Loading /> : <Wrapper data={data} />}
    </div>
  );
};
export default LoadList;
