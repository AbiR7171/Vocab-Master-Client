import axios from "axios";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const HomeFeedback = () => {
  const [feedbacks, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("https://vocab-master-server-new.vercel.app/feedback")
      .then((res) => {
        console.log(res.data);
        const homeFeedback = res.data.filter((r) => r.show === true);

        setFeedback(homeFeedback);
      });
  }, []);

  return (
    <div className="container mx-auto px-52 mt-20 ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {feedbacks.map((feedback, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg p-5">
                <div className="flex justify-center items-center">
                  <Rating
                    style={{ maxWidth: 280 }}
                    value={feedback?.star}
                    readOnly
                  />
                </div>

                <div className="flex justify-center mt-3">
                  <p>
                    <Icon
                      icon="mdi:comma"
                      rotate={2}
                      className="text-5xl text-black"
                    />
                  </p>
                  <p>
                    <Icon
                      icon="mdi:comma"
                      rotate={2}
                      className="text-5xl text-black"
                    />
                  </p>
                </div>

                <p className="text-center mt-3 text-black">
                  {feedback?.feedback}
                </p>
                <p className="text-center text-yellow-600 mt-2">
                  {feedback?.name}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeFeedback;
