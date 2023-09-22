import React from "react";

const Review = () => {
  return (
    <div>
      <section className="bg-red-600 bg-opacity-50 rounded-lg mt-10 p-5 mx-20">
        <div className="text-center text-xl font-semibold mt-3 mb-7">
          <h3 className="font-serif font-semibold text-3xl">
            WHAT OUR USER SAY
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-5 ms-3">
          <div className="border-l-4 p-3">
            <p>
              "Chef John was amazing! He catered my daughter's wedding and
              everyone was raving about the food. He was professional, punctual,
              and his attention to detail was impeccable. Thank you Chef John
              for making our special day even more memorable." -{" "}
              <span className="font-serif text-xl font-bold">Sarah T.</span>{" "}
            </p>
          </div>
          <div className="border-l-4 p-3">
            <p>
              "I had the pleasure of dining at Chef Maria's restaurant and the
              food was absolutely delicious. Each dish was crafted with care and
              bursting with flavor. The service was also excellent, and I can't
              wait to go back again soon!" -{" "}
              <span className="font-serif text-xl font-bold"> Robert L.</span>
            </p>
          </div>
          <div className="border-l-4 p-3">
            <p>
              "Chef Kim's cooking class was so much fun! She is incredibly
              knowledgeable and passionate about food, and she made the
              experience engaging and interactive. I learned so much and can't
              wait to try out the recipes at home." -{" "}
              <span className="font-serif text-xl font-bold">Emily H.</span>
            </p>
          </div>
          <div className="border-l-4 p-3">
            <p>
              "Chef Carlos catered my anniversary party and I couldn't have been
              happier with the results. The food was absolutely amazing, and he
              went above and beyond to accommodate our dietary restrictions. I
              would highly recommend Chef Carlos to anyone looking for a
              talented and professional chef." -{" "}
              <span className="font-serif text-xl font-bold">Mark D.</span>
            </p>
          </div>
        </div>
        {/* <Row lg={4} md={2} sm={1} className=' mt-5'>
                    <Col className='border-start p-3'>

                    </Col>
                    <Col className='border-start p-3'>

                    </Col>
                    <Col className='border-start p-3'>

                    </Col>
                    <Col className='border-start p-3'>

                    </Col>
                </Row> */}
      </section>
    </div>
  );
};

export default Review;
