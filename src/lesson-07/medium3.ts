// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME_ELEMENT_TYPE = Exclude<OrderState, "buyingSupplies"> & Exclude<OrderState, "producing">;
type FIXME = FIXME_ELEMENT_TYPE[];

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  ).map(e => e as FIXME_ELEMENT_TYPE)
