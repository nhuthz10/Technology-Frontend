export const path = {
  HOME: "home",
  PRODUCT: "product",
  PRODUCT_DETAIL: "product/:productId",
  LOGIN: "login",
  NOT_FOUND: "*",
};

export const regex = {
  USERNAME: /^[^\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\d{10,}$/,
  PRICE: /^\d{1,3}(?:\.\d{3})*$/,
  DISCOUNT: /^(?:100|[0-9]|[1-9][0-9])$/,
  QUANTITY: /^[0-9]+$/,
};

export const LIMIT_PRODUCT_INTRODUCE = 10;
