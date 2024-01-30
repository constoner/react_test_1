import { IPost } from "../../shared/types";

export default interface IPostList {
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: (
    startIndex: number,
    stopIndex: number
  ) => Promise<void> | void;
  items: IPost[];
}
