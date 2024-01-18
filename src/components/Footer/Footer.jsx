import React from "react";
import { Grid } from "@mui/material";
import "./Footer.scss";
import img1 from "../../assets/bo-cong-thuong.svg";
import img2 from "../../assets/bo-cong-thuong-2.png";
import img3 from "../../assets/dmca_protected_sml_120y.png";
import vnpay from "../../assets/vnpay.png";
import paypal from "../../assets/paypal.png";
import cod from "../../assets/cod.png";
import visa from "../../assets/visa.png";
import zalopay from "../../assets/zalopay.png";
import atm from "../../assets/atm.png";
import momo from "../../assets/momo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className="footer-category">
            <h1 className="footer-category-title">Hỗ trợ khách hàng</h1>
            <p className="footer-category-item">Các câu hỏi thường gặp</p>
            <p className="footer-category-item">Giử yêu cầu hỗ trợ</p>
            <p className="footer-category-item">Hướng dẫn đặt hàng</p>
            <p className="footer-category-item">Phương thức vận chuyển</p>
            <p className="footer-category-item">Chính sách đổi trả</p>
            <p className="footer-category-item">Hướng dẫn trả góp</p>
            <p className="footer-category-item">Chính sách hàng nhập khẩu</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="footer-category">
            <h1 className="footer-category-title">Hợp tác và liên kết</h1>
            <p className="footer-category-item">Quy chế hoạt động sàn GDTMĐT</p>
            <p className="footer-category-item">Bán hàng cùng MNShop</p>
            <h1 className="footer-category-title" style={{ marginTop: 30 }}>
              Chứng nhận bởi
            </h1>
            <div className="footer-category-wrap-img">
              <img className="footer-category-img" src={img2} alt=""></img>
              <img
                className="footer-category-img"
                style={{ width: 100 }}
                src={img1}
                alt=""
              ></img>
              <img className="footer-category-img" src={img3} alt=""></img>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="footer-category">
            <h1 className="footer-category-title">Phương thức thanh toán</h1>
            <div className="footer-category-wrap-img">
              <img
                className="footer-category-img"
                src={paypal}
                style={{ width: 100, height: 48 }}
                alt=""
              ></img>
              <img className="footer-category-img" src={atm} alt=""></img>
              <img className="footer-category-img" src={visa} alt=""></img>
              <img className="footer-category-img" src={cod} alt=""></img>
              <img className="footer-category-img" src={momo} alt=""></img>
              <img className="footer-category-img" src={zalopay} alt=""></img>
              <img className="footer-category-img" src={vnpay} alt=""></img>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="footer-category">
            <h1 className="footer-category-title">Kết nối với chúng tôi</h1>
            <div className="footer-category-wrap-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100075108746922"
                target="blank"
              >
                <FontAwesomeIcon
                  className="footer-category-icon"
                  icon={faFacebook}
                  style={{ background: "#1877F2" }}
                ></FontAwesomeIcon>
              </a>

              <a href="https://www.instagram.com/n_30102003/" target="blank">
                <FontAwesomeIcon
                  className="footer-category-icon"
                  icon={faSquareInstagram}
                  style={{
                    background:
                      "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
                  }}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
