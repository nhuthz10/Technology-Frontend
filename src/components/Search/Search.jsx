import React, { useState, useEffect, useRef } from "react";
import "./Search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

const Search = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef();

  const handleClearSearchText = () => {
    setSearchText("");
    inputRef.current.focus();
  };

  return (
    <Tippy
      interactive
      visible={isShowSearch}
      onClickOutside={() => {
        setIsShowSearch(false);
      }}
      placement="bottom"
      delay={[0, 500]}
      offset={[0, 10]}
      render={(attrs) => (
        <div className="search-result-container" tabIndex="-1" {...attrs}>
          <div className="search-result-item">Điện thoại di động</div>
          <div className="search-result-item">Điện thoại di động</div>
          <div className="search-result-item">Điện thoại di động</div>
          <div className="search-result-item">Điện thoại di động</div>
        </div>
      )}
    >
      <div className="search-container">
        <div className="search-wrap-text">
          <FontAwesomeIcon
            className="search-icon"
            icon={faMagnifyingGlass}
          ></FontAwesomeIcon>
          <input
            ref={inputRef}
            onClick={() => setIsShowSearch(true)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-text"
            placeholder="Tìm kiếm sản phẩm"
          ></input>
          {searchText.trim().length > 0 ? (
            <FontAwesomeIcon
              onClick={() => handleClearSearchText()}
              className="search-icon-close"
              icon={faCircleXmark}
            ></FontAwesomeIcon>
          ) : null}

          <div className="search-btn">
            <span className="search-separate"></span>
            <div className="search-btn-title">Tìm kiếm</div>
          </div>
        </div>
      </div>
    </Tippy>
  );
};

export default Search;
