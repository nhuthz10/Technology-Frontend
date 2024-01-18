import React from "react";
import Ratting from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./CustomRating.scss";

const StyledRating = styled(Ratting)({
  "&": {
    marginRight: "-2px",
  },
  "& .MuiRating-icon": {
    marginRight: "2px",
  },
  "& .MuiRating-iconFilled": {
    color: "#ffc403",
  },
  "& .MuiRating-iconHover": {
    color: "#ffc403",
  },
  "& .MuiRating-iconEmpty": {
    color: "#dddde2",
  },
});

const CustomRating = ({ className, value, onChange, readOnly }) => {
  return (
    <StyledRating
      className={className}
      onChange={onChange}
      value={value}
      readOnly={readOnly}
      icon={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
      emptyIcon={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
    />
  );
};

export default CustomRating;
