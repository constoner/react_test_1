import { MULTIPLIER } from "../config";

const multiplyArray: any = (data: any, multiplier: number = 1) => {
  if (multiplier === 1 && multiplier > 0) {
    return data;
  }
  return multiplyArray([...data, ...data], multiplier - 1);
};

const getData = (url: string) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      return multiplyArray(data, 1);
    });
};

const getMoreData = ({ start, stop }: { start: number; stop: number }) => {
  console.log(`loading items from ${start} to ${stop}`);
  return new Promise((res) => res);
};

export { getData, getMoreData };
