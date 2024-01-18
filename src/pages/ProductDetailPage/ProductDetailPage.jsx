import React, { useState } from "react";
import logo from "../../assets/Logo_Technology.png";
import "./ProductDetailPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import open_box from "../../assets/open_box.png";
import refund_me from "../../assets/return_me.png";
import returnn from "../../assets/return.png";
import CustomRating from "../../components/CustomRating/CustomRating";
import Comment from "../../components/Comment/Comment";

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (e) => {
    if (e.target.value.replace(/[^0-9]/g, "")[0] === "0") {
      setQuantity("");
    } else {
      setQuantity(e.target.value.replace(/[^0-9]/g, ""));
    }
  };

  return (
    <div className="product-detail-page-container">
      <div className="product-detail-content">
        <div className="product-detail-wrap-img-infor">
          <div className="product-wrap-img">
            <img src={logo} alt="" className="product-img"></img>
          </div>
          <div className="product-infor">
            <div className="product-infor-content">
              <h1 className="product-infor-name">Hộp quà tết cao cấp</h1>
              <div className="product-wrap-ratting">
                <span className="product-infor-ratting-quantity">5.0</span>
                <CustomRating
                  className="product-infor-ratting"
                  name="simple-controlled"
                  value={5}
                  readOnly
                />
              </div>
              <p className="product-stock-quantity">Tồn kho: 0</p>
              <p className="product-price">
                {currencyFormatter.format(12345678)}
                <span
                  style={{
                    textDecoration: "underline",
                    marginLeft: 2,
                  }}
                >
                  đ
                </span>
              </p>
            </div>

            <div className="product-detail-confidence-buy">
              <h1 className="product-detail-confidence-title">
                An tâm mua sắn
              </h1>
              <div className="product-detail-confidence-item border-bottom">
                <img
                  src={open_box}
                  alt=""
                  className="product-detail-confidence-img"
                ></img>
                Được mở hộp kiểm tra khi nhận hàng.
              </div>
              <div className="product-detail-confidence-item border-bottom">
                <img
                  src={refund_me}
                  alt=""
                  className="product-detail-confidence-img"
                ></img>
                Được hoàn tiền 111% nếu là hàng giả.
              </div>
              <div className="product-detail-confidence-item">
                <img
                  src={returnn}
                  alt=""
                  className="product-detail-confidence-img"
                ></img>
                Đổi trả miễn phí tại nhà trong 30 trong nếu sản phẩm lỗi.
              </div>
            </div>
            <div className="product-infor-description">
              <h1 className="product-infor-description-title">
                Mô tả sản phẩm
              </h1>
              <p className="product-infor-description-text">
                Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt và trái
                cây có vị ngon ngọt với những hương vị từ cay, chua cho đến
                ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là một
                món quà tri ân ý nghĩa dành cho bạn bè và người của bạn vào dịp
                Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt
                và trái cây có vị ngon ngọt với những hương vị từ cay, chua cho
                đến ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là
                một món quà tri ân ý nghĩa dành cho bạn bè và người của bạn vào
                dịp Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại
                hạt và trái cây có vị ngon ngọt với những hương vị từ cay, chua
                cho đến ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ
                là một món quà tri ân ý nghĩa dành cho bạn bè và người của bạn
                vào dịp Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các
                loại hạt và trái cây có vị ngon ngọt với những hương vị từ cay,
                chua cho đến ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn
                sẽ là một món quà tri ân ý nghĩa dành cho bạn bè và người của
                bạn vào dịp Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A
                các loại hạt và trái cây có vị ngon ngọt với những hương vị từ
                cay, chua cho đến ngọt, bùi đặc trưng cho hương vị cuộc sống,
                hứa hẹn sẽ là một món quà tri ân ý nghĩa dành cho bạn bè và
                người của bạn vào dịp Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải
                Long 05A các loại hạt và trái cây có vị ngon ngọt với những
                hương vị từ cay, chua cho đến ngọt, bùi đặc trưng cho hương vị
                cuộc sống, hứa hẹn sẽ là một món quà tri ân ý nghĩa dành cho bạn
                bè và người của bạn vào dịp Tết này.Hộp Quà Tết Thực Phẩm Cao
                Cấp Hải Long 05A các loại hạt và trái cây có vị ngon ngọt với
                những hương vị từ cay, chua cho đến ngọt, bùi đặc trưng cho
                hương vị cuộc sống, hứa hẹn sẽ là một món quà tri ân ý nghĩa
                dành cho bạn bè và người của bạn vào dịp Tết này. Hộp Quà Tết
                Thực Phẩm Cao Cấp Hải Long 05A các loại hạt và trái cây có vị
                ngon ngọt với những hương vị từ cay, chua cho đến ngọt, bùi đặc
                trưng cho hương vị cuộc sống, hứa hẹn sẽ là một món quà tri ân ý
                nghĩa dành cho bạn bè và người của bạn vào dịp Tết này. Hộp Quà
                Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt và trái cây có
                vị ngon ngọt với những hương vị từ cay, chua cho đến ngọt, bùi
                đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là một món quà tri
                ân ý nghĩa dành cho bạn bè và người của bạn vào dịp Tết này. Hộp
                Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt và trái cây
                có vị ngon ngọt với những hương vị từ cay, chua cho đến ngọt,
                bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là một món quà
                tri ân ý nghĩa dành cho bạn bè và người của bạn vào dịp Tết này.
                Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt và trái
                cây có vị ngon ngọt với những hương vị từ cay, chua cho đến
                ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là một
                món quà tri ân ý nghĩa dành cho bạn bè và người của bạn vào dịp
                Tết này. Hộp Quà Tết Thực Phẩm Cao Cấp Hải Long 05A các loại hạt
                và trái cây có vị ngon ngọt với những hương vị từ cay, chua cho
                đến ngọt, bùi đặc trưng cho hương vị cuộc sống, hứa hẹn sẽ là
                một món quà tri ân ý nghĩa dành cho bạn bè và người của bạn vào
                dịp Tết này.
              </p>
            </div>
          </div>
        </div>

        <div className="product-detail-feed-back">
          <h1 className="product-detail-feed-back-title">
            Khách hàng đánh giá
          </h1>
          <h2 className="product-detail-feed-back-overview">Tổng quan</h2>
          <div className="feed-back-overview-ratting">
            <div className="feed-back-overview-wrap-ratting">
              <span className="feed-back-ratting-quantity">5.0</span>
              <CustomRating
                className="feed-back-ratting"
                name="simple-controlled"
                value={5}
                readOnly
              />
            </div>
            <span className="feed-back-all-have-evaluated">(10 đánh giá)</span>
            <div className="feed-back-wrap-process">
              <CustomRating value={5} readOnly={true} />
              <div className="feed-back-process">
                <div
                  className="feed-back-process-percent"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <span className="feed-back-have-evaluated">10</span>
            </div>
            <div className="feed-back-wrap-process">
              <CustomRating
                className="feed-back-ratting"
                name="simple-controlled"
                value={4}
                readOnly
              />
              <div className="feed-back-process">
                <div
                  className="feed-back-process-percent"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="feed-back-have-evaluated">10</span>
            </div>
            <div className="feed-back-wrap-process">
              <CustomRating
                className="feed-back-ratting"
                name="simple-controlled"
                value={3}
                readOnly
              />
              <div className="feed-back-process">
                <div
                  className="feed-back-process-percent"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="feed-back-have-evaluated">10</span>
            </div>
            <div className="feed-back-wrap-process">
              <CustomRating
                className="feed-back-ratting"
                name="simple-controlled"
                value={2}
                readOnly
              />
              <div className="feed-back-process">
                <div
                  className="feed-back-process-percent"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="feed-back-have-evaluated">10</span>
            </div>
            <div className="feed-back-wrap-process">
              <CustomRating
                className="feed-back-ratting"
                name="simple-controlled"
                value={1}
                readOnly
              />
              <div className="feed-back-process">
                <div
                  className="feed-back-process-percent"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="feed-back-have-evaluated">10</span>
            </div>
          </div>
          <div style={{ marginTop: 50 }}>
            <Comment isFirst={true} avatar={logo} rating={5}></Comment>
            <Comment avatar={logo} rating={5}></Comment>
            <Comment avatar={logo} rating={5}></Comment>
            <Comment avatar={logo} rating={5}></Comment>
            <Comment avatar={logo} rating={5}></Comment>
            <Comment avatar={logo} rating={5}></Comment>
            <Comment isLast={true} avatar={logo} rating={5}></Comment>
          </div>
        </div>
      </div>

      <div className="product-order">
        <h1 className="product-quantity-title">Số lượng</h1>
        <div className="product-wrap-quantity-btn">
          <button className="product-subtract-btn">
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
          <input
            className="product-quantity"
            value={quantity}
            maxLength={3}
            onChange={(e) => handleChangeQuantity(e)}
          ></input>
          <button className="product-add-btn">
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <h1 className="product-order-title">Tạm tính</h1>
        <p className="product-price">
          {currencyFormatter.format(12345678)}
          <span
            style={{
              textDecoration: "underline",
              marginLeft: 2,
            }}
          >
            đ
          </span>
        </p>
        <button className="product-order-btn-buy">Mua ngay</button>
        <button className="product-order-btn">Thêm vào giỏ</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
