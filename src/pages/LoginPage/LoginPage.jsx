import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import google_img from "../../assets/login_google.png";
import facebook_img from "../../assets/login_facebook.png";
import backgound_img from "../../assets/background_login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";

import {
  handleCreateUserService,
  handleCheckUserExistService,
} from "../../services/userService";
import { regex } from "../../utils/constants";
import "./LoginPage.scss";

const LoginPage = ({ isOpenLogin, setIsOpenLogin }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordRegister, setIsShowPasswordRegister] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [enterUserName, setEnterUserName] = useState(true);
  const [enterPassword, setEnterPassword] = useState(false);
  const [enterAccount, setEnterAccount] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const handleClose = () => {
    setEnterUserName(true);
    setEnterPassword(false);
    setEnterAccount(false);
    setIsOpenLogin(false);
    setValue("userName", "");
    setValue("password", "");
    setValue("fullName", "");
    setValue("userNameRegister", "");
    setValue("passwordRegister", "");
    setValue("confirmPassword", "");
  };

  const handleClickClose = () => {
    setEnterUserName(true);
    setEnterPassword(false);
    setEnterAccount(false);
    setIsOpenLogin(false);
    setValue("userName", "");
    setValue("password", "");
    setValue("fullName", "");
    setValue("userNameRegister", "");
    setValue("passwordRegister", "");
    setValue("confirmPassword", "");
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleShowPasswordRegister = () => {
    setIsShowPasswordRegister(!isShowPasswordRegister);
  };

  const handleShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const handleClickPrev = () => {
    if (enterPassword) {
      setEnterUserName(true);
      setEnterPassword(false);
    }
    if (enterAccount) {
      setEnterAccount(false);
      setEnterUserName(true);
    }
  };

  const onSubmitUserName = async (data) => {
    try {
      let res = await handleCheckUserExistService(data.userName);
      if (res.errCode === 0) {
        if (res.data) {
          setEnterUserName(false);
          setEnterPassword(true);
        } else {
          setEnterUserName(false);
          setEnterAccount(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitPassword = (data) => {};

  const onSubmitAccount = async (data) => {
    try {
      let res = await handleCreateUserService({
        fullName: data.fullName,
        userName: data.userNameRegister,
        password: data.passwordRegister,
      });
      if (res.errCode === 0) {
        setEnterAccount(false);
        setEnterUserName(true);
        setValue("fullName", "");
        setValue("userNameRegister", "");
        setValue("passwordRegister", "");
        setValue("confirmPassword", "");
        setValue("userName", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal open={isOpenLogin} onClose={handleClose} className="login-container">
      <div className="login-content">
        <FontAwesomeIcon
          onClick={() => handleClickClose()}
          icon={faCircleXmark}
          className="login-btn-close"
        ></FontAwesomeIcon>
        <div className="login-left">
          {enterUserName ? (
            <div className="login-wrap-input-user-name">
              <h1 className="login-title">Xin chào,</h1>
              <p className="login-sub-title">Đăng nhập hoặc Tạo tài khoản</p>
              <form onSubmit={handleSubmit(onSubmitUserName)}>
                <div className="wrap-input">
                  <input
                    name="userName"
                    style={{
                      borderColor: !errors?.userName?.message
                        ? "rgb(13, 92, 182)"
                        : errors?.userName?.message
                        ? "var(--error-color)"
                        : "",
                    }}
                    {...register("userName", {
                      required: "Nhập tên tài khoản",
                    })}
                    className="login-input-user-name"
                    placeholder="Tên tài khoản"
                  ></input>
                  {errors.userName && (
                    <p className="log-error">{errors.userName.message}</p>
                  )}
                </div>

                <button className="login-btn-continue" type="submit">
                  Tiếp Tục
                </button>
              </form>

              <div className="login-separate">
                <span className="login-separate-title">
                  Hoặc đăng nhập bằng
                </span>
              </div>
              <div className="login-wrap-type-login">
                <img
                  className="login-facebook-img"
                  src={facebook_img}
                  alt=""
                ></img>
                <img className="login-google-img" src={google_img} alt=""></img>
              </div>
            </div>
          ) : null}

          {enterPassword ? (
            <>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="login-btn-prev"
                onClick={handleClickPrev}
              ></FontAwesomeIcon>
              <div className="login-wrap-input-password">
                <h1 className="login-title">Nhập mật khẩu</h1>
                <p className="login-sub-title">
                  Vui lòng nhập mật khẩu của tài khoản
                </p>
                <p className="login-user-name">{getValues("userName")}</p>

                <form onSubmit={handleSubmit(onSubmitPassword)}>
                  <div className="wrap-input">
                    <div style={{ position: "relative" }}>
                      <div className="login-show-password-icon">
                        <FontAwesomeIcon
                          onClick={handleShowPassword}
                          icon={isShowPassword ? faEye : faEyeSlash}
                        ></FontAwesomeIcon>
                      </div>

                      <input
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        style={{
                          borderColor: !errors?.password?.message
                            ? "rgb(13, 92, 182)"
                            : errors?.password?.message
                            ? "var(--error-color)"
                            : "",
                        }}
                        {...register("password", {
                          required: "Nhập mật khẩu",
                        })}
                        className="login-input-password"
                        placeholder="Mật khẩu"
                      ></input>
                    </div>
                    {errors.password && (
                      <p className="log-error">{errors.password.message}</p>
                    )}
                  </div>
                </form>

                <button className="login-btn-continue">Đăng nhập</button>
                <p className="login-forgot-password-title">Quên mật khẩu</p>
              </div>
            </>
          ) : null}

          {enterAccount ? (
            <>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="login-btn-prev"
                onClick={handleClickPrev}
              ></FontAwesomeIcon>
              <div className="login-wrap-input-account">
                <h1 className="login-title">Tạo tài khoản</h1>

                <form onSubmit={handleSubmit(onSubmitAccount)}>
                  <label htmlFor="fullName" className="login-user-name-lable">
                    Vui lòng cho biết tên của bạn
                  </label>
                  <div className="wrap-input">
                    <input
                      id="fullName"
                      name="fullName"
                      style={{
                        borderColor: !errors?.fullName?.message
                          ? "rgb(13, 92, 182)"
                          : errors?.fullName?.message
                          ? "var(--error-color)"
                          : "",
                      }}
                      {...register("fullName", {
                        required: "Nhập tên của bạn",
                        validate: {
                          checkFullName: (value) => {
                            const words = value.split(/\s+/);
                            if (words.length < 2) {
                              return "Tên của bạn gồm 2 từ trở lên, không bao gồm số và kí tự đặt biệt";
                            }
                            for (const word of words) {
                              if (
                                /\d/.test(word) ||
                                /[!@#$%^&*(),.?":{}|<>]/.test(word)
                              ) {
                                return "Tên của bạn gồm 2 từ trở lên, không bao gồm số và kí tự đặt biệt";
                              }
                            }
                          },
                        },
                      })}
                      className="login-input-user-name"
                      placeholder="Gồm 2 từ trở lên, không bao gồm số và kí tự đặt biệt"
                    ></input>
                    {errors.fullName && (
                      <p className="log-error">{errors.fullName.message}</p>
                    )}
                  </div>

                  <label
                    htmlFor="userNameRegister"
                    className="login-user-name-lable"
                  >
                    Tên đăng nhập
                  </label>
                  <div className="wrap-input">
                    <input
                      id="userNameRegister"
                      name="userNameRegister"
                      style={{
                        borderColor: !errors?.userNameRegister?.message
                          ? "rgb(13, 92, 182)"
                          : errors?.userNameRegister?.message
                          ? "var(--error-color)"
                          : "",
                      }}
                      {...register("userNameRegister", {
                        required: "Nhập tên đăng nhập",
                        validate: {
                          checkUserNameRegister: (value) => {
                            if (value.length < 8 || value.length > 32) {
                              return "Tên đăng nhập từ 8 đến 32 kí tự không chứa khoảng trắng";
                            }
                            const regex = /\s/;
                            if (regex.test(value)) {
                              return "Tên đăng nhập từ 8 đến 32 kí tự không chứa khoảng trắng";
                            }
                          },
                        },
                      })}
                      className="login-input-user-name"
                      placeholder="Tên đăng nhập từ 8 đến 32 kí tự không chứa khoảng trắng"
                    ></input>
                    {errors.userNameRegister && (
                      <p className="log-error">
                        {errors.userNameRegister.message}
                      </p>
                    )}
                  </div>

                  <label
                    htmlFor="passwordRegister"
                    className="login-password-lable"
                  >
                    Mật khẩu
                  </label>
                  <div className="wrap-input">
                    <div style={{ position: "relative" }}>
                      <div className="login-show-password-icon">
                        <FontAwesomeIcon
                          onClick={handleShowPasswordRegister}
                          icon={isShowPasswordRegister ? faEye : faEyeSlash}
                        ></FontAwesomeIcon>
                      </div>
                      <input
                        id="passwordRegister"
                        name="passwordRegister"
                        type={isShowPasswordRegister ? "text" : "password"}
                        style={{
                          borderColor: !errors?.passwordRegister?.message
                            ? "rgb(13, 92, 182)"
                            : errors?.passwordRegister?.message
                            ? "var(--error-color)"
                            : "",
                        }}
                        {...register("passwordRegister", {
                          required: "Nhập mật khẩu",
                          validate: {
                            isValidPasswordRegister: (value) => {
                              if (value.length < 8 || value.length > 32) {
                                return "Từ 8 đến 32 kí tự, chứa ít nhất một kí tự chữ và kí tự số";
                              }

                              let hasLetter = /[a-zA-Z]/.test(value);
                              let hasDigit = /\d/.test(value);

                              if (!hasLetter || !hasDigit) {
                                return "Từ 8 đến 32 kí tự, chứa ít nhất một kí tự chữ và kí tự số";
                              }
                            },
                          },
                        })}
                        className="login-input-password"
                        placeholder="Từ 8 đến 32 kí tự, chứa ít nhất một kí tự chữ và kí tự số"
                      ></input>
                    </div>
                    {errors.passwordRegister && (
                      <p className="log-error">
                        {errors.passwordRegister.message}
                      </p>
                    )}
                  </div>

                  <label
                    htmlFor="passwordRegister"
                    className="login-password-lable"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <div className="wrap-input">
                    <div style={{ position: "relative" }}>
                      <div className="login-show-password-icon">
                        <FontAwesomeIcon
                          onClick={handleShowConfirmPassword}
                          icon={isShowConfirmPassword ? faEye : faEyeSlash}
                        ></FontAwesomeIcon>
                      </div>
                      <input
                        name="confirmPassword"
                        id="confirmPassword"
                        type={isShowConfirmPassword ? "text" : "password"}
                        style={{
                          borderColor: !errors?.confirmPassword?.message
                            ? "rgb(13, 92, 182)"
                            : errors?.confirmPassword?.message
                            ? "var(--error-color)"
                            : "",
                        }}
                        {...register("confirmPassword", {
                          required: "Nhập lại mật khẩu",
                          validate: {
                            isValidConfirmPasswordRegister: (value) => {
                              if (value !== getValues("passwordRegister")) {
                                return "Mật khẩu không trùng khớp";
                              }
                            },
                          },
                        })}
                        className="login-input-password"
                        placeholder="Nhập lại mật khẩu"
                      ></input>
                    </div>
                    {errors.confirmPassword && (
                      <p className="log-error">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <button className="login-btn-create-account" type="submit">
                    Tạo tài khoản
                  </button>
                </form>
              </div>
            </>
          ) : null}
        </div>
        <div className="login-right">
          <img className="login-img" src={backgound_img} alt=""></img>
          <h1 className="login-title">Mua sắm tại MNSHOP</h1>
          <p className="login-sub-title">Siêu ưu đãi mỗi ngày</p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginPage;
