import React from "react";
import appleIcon from "../../../assets/icons/apple_icon.svg";
import playstoreIcon from "../../../assets/icons/playstore_icon.svg";
import ImageComp from "../image/imageComp";

const DownloadAppButton = ({ appstore = false }) => {
  return (
    <div className="flex gap-20">
      <button
        style={{
          background: "#ffffff",
          width: "180px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "8px",
        }}
      >
        <ImageComp src={true ? appleIcon : playstoreIcon} width={"25px"} />
        <div>
          {true ? (
            <>
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Download on the
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                App Store
              </p>
            </>
          ) : (
            <>
              <p
                style={{
                  fontSize: "10px",
                  textAlign: "left",
                  marginBottom: "-7px",
                }}
              >
                GET IT ON
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Google Play
              </p>
            </>
          )}
        </div>
      </button>
      <button
        style={{
          background: "#ffffff",
          width: "180px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "8px",
        }}
      >
        <ImageComp src={appstore ? appleIcon : playstoreIcon} width={"25px"} />
        <div>
          {appstore ? (
            <>
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Download on the
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                App Store
              </p>
            </>
          ) : (
            <>
              <p
                style={{
                  fontSize: "10px",
                  textAlign: "left",
                  marginBottom: "-7px",
                }}
              >
                GET IT ON
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                Google Play
              </p>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default DownloadAppButton;
