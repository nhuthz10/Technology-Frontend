import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Loading.scss";

const Loading = ({ children, isLoading }) => {
  return (
    <div className="loading-container">
      {isLoading && (
        <>
          <HashLoader
            color="#FF6868"
            size="100px"
            speedMultiplier={1.5}
            loading={true}
            cssOverride={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "99999",
            }}
          />
          <div className="loading-orverlay"></div>
        </>
      )}

      {children}
    </div>
  );
};

export default Loading;
