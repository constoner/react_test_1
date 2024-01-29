const API_RESPONSE_NUMBER: number = 100;
const ITEMS_NUMBER: number = 1000; // not less than
const MULTIPLIER: number = Math.ceil(
  Math.log(ITEMS_NUMBER / API_RESPONSE_NUMBER) * 2
);

export { MULTIPLIER };
