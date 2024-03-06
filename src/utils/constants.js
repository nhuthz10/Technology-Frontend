export const path = {
  HOME: "home",
  PRODUCT: "product",
  USER: "user/*",
  USER_PROFILE: "profile/:userId",
  PRODUCT_DETAIL: "product/:productId",
  LOGIN: "login",
  NOT_FOUND: "*",
};

export const menuUser = [
  {
    path: "user/profile",
    lable: "Thông tin tài khoản",
  },
  {
    path: "",
    lable: "Đơn hàng của tôi",
  },
  {
    path: "",
    lable: "Trung tâm hỗ trợ",
  },
  {
    path: "",
    lable: "Đăng xuất",
  },
];

export const regex = {
  USERNAME: /^[^\d!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\d{10,}$/,
  PRICE: /^\d{1,3}(?:\.\d{3})*$/,
  DISCOUNT: /^(?:100|[0-9]|[1-9][0-9])$/,
  QUANTITY: /^[0-9]+$/,
};

export const LIMIT_PRODUCT_INTRODUCE = 10;
