import React from "react";
import appleIcon from "../../../assets/icons/apple_icon.svg";
import playstoreIcon from "../../../assets/icons/playstore_icon.svg";
import ImageComp from "../image/imageComp";

const DownloadAppButton = ({ appstore = false }) => {
  return (
    <div className="flex gap-20 downloadAppButtons-container">
      <button className="downloadAppButton">
        <ImageComp
          src={true ? appleIcon : playstoreIcon}
          width={"25px"}
          imageStyle={{ width: "100%" }}
        />
        <div>
          {true ? (
            <>
              <p
                style={{
                  fontSize: "10px",
                  textAlign: "left",
                  marginBottom: "-7px",
                }}
              >
                Download on the
              </p>
              <p
                style={{
                  fontSize: "20px",
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
      <button className="downloadAppButton">
        <ImageComp
          src={appstore ? appleIcon : playstoreIcon}
          width={"25px"}
          imageStyle={{ width: "100%" }}
        />
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
