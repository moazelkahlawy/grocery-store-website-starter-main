import React from "react";
import BannerImg from "../../assets/website/banner.jpg";
import PlayStoreImg from "../../assets/website/play_store.png";
import AappStoreImg from "../../assets/website/app_store.png";

const bannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div
          style={bannerStyle}
          className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        >
          <div>
            <div className="space-y-4 max-w-xl mx-auto">
              <h1
                data-aos="fade-up"
                className="text-2xl text-center sm:text-4xl font-semibold"
              >
                Download the app
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-center sm:px-20"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
                soluta unde nihil suscipit magnam ex!
              </p>
              {/* images link */}
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex justify-center items-center gap-4"
              >
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AappStoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
