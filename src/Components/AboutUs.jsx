import React from "react";
import styled from "styled-components";

const BODY_ABOUT = styled.div`
  @media (max-width: 575.98px) {
    text-align: justify;

    p {
      font-size: 1rem;
    }

    #unbiasedReview {
      width: 80% !important;
    }

    #About_End {
      font-size: 1rem;
    }
  }
`;

const HeadingAboutH2 = styled.h2`
  font-size: 2.5rem;
  color: #e84545;
  text-align: center;
  margin-bottom: 2%;
  margin-top: 3%;

  @media (max-width: 575.98px) {
    font-size: 1.5rem;
    margin: 5% 0;
  }
`;

const HeadingAboutH1 = styled.h1`
  font-size: 3rem;
  color: #e84545;
  text-align: center;
  margin-bottom: 2%;
  margin-top: 5%;

  @media (max-width: 575.98px) {
    font-size: 1.5rem;
  }
`;

const ImgShadow = styled.img`
  box-shadow: 0px 0px 20px #e84545;
  width: 75%;
  height: auto;
  border-radius: 2%;

  @media (max-width: 575.98px) {
    width: 90% !important;
  }
`;

export default function AboutUs() {
  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <BODY_ABOUT>
      <div className="container text-light fs-5 text">
        <h1 className=" text-center my-4 border border-5 p-2">About Us</h1>
        <HeadingAboutH1>Welcome to Play Tech Insider!</HeadingAboutH1>
        <p className="BODY_ABOUT w-75 mx-auto">
          At Play Tech Insider, we're not just passionate about gaming and
          technology - we're obsessed. Our mission is to provide gamers and tech
          enthusiasts with the latest insights, reviews, and updates on the
          hottest hardware, games, and gadgets. Whether you're a hardcore gamer,
          a casual player, or a tech aficionado, you've come to the right place.
        </p>
        <ImgShadow
          src="./images/florian-olivo-Mf23RF8xArY-unsplash.jpg"
          alt=""
          className="rounded mx-auto d-block mt-4"
        />
        <HeadingAboutH2>Our Story</HeadingAboutH2>
        <p className="w-75 mx-auto">
          Founded 2020, Play Tech Insider was born out of a shared love for the
          immersive worlds of gaming and the ever-evolving landscape of
          technology. We recognized the need for a platform that not only offers
          in-depth reviews and analysis but also provides a curated selection of
          top-notch hardware products. Our team consists of avid gamers and tech
          experts who are dedicated to bringing you the most accurate and
          insightful information.
        </p>
        <HeadingAboutH2>What Sets Us Apart</HeadingAboutH2>
        <div className={`${isMobile ? "d-block" : "d-flex "}`}>
          <ImgShadow
            src="./images/martin-katler-7wCxlBfGMdk-unsplash.jpg"
            alt=""
            style={{ width: 350, height: 600 }}
            className="mx-4"
          />
          <div className="list-group w-75 mx-auto mt-2" id="unbiasedReview">
            <li
              className="list-group-item bg-transparent border text-light mb-2"
              aria-current="true"
            >
              <h5 className="mb-1">Unbiased Reviews:</h5>
              <p className="mb-1">
                We pride ourselves on delivering honest, unbiased reviews. Our
                team thoroughly tests and evaluates each product to ensure that
                you get the most accurate and reliable information before making
                a purchase.
              </p>
            </li>
            <li className="list-group-item bg-transparent border text-light mb-2">
              <h5 className="mb-1">Expert Insights:</h5>
              <p className="mb-1">
                Our team of experts is constantly staying ahead of the curve in
                the gaming and tech industry. From the latest gaming consoles to
                cutting-edge PC components, we provide in-depth analyses and
                expert insights to help you make informed decisions.
              </p>
            </li>
            <li className="list-group-item bg-transparent border text-light mb-2">
              <h5 className="mb-1">Curated Product Selection:</h5>
              <p className="mb-1">
                In addition to reviews, we offer a carefully curated selection
                of gaming peripherals, PC components, and tech accessories. Each
                product in our store is handpicked for its quality, performance,
                and overall value.
              </p>
            </li>
            <li className="list-group-item bg-transparent text-light border mb-2">
              <h5 className="mb-1">Community-Driven:</h5>
              <p className="mb-1">
                We believe in building a community of like-minded individuals
                who share a passion for gaming and technology. Join our forums,
                participate in discussions, and connect with fellow gamers and
                tech enthusiasts.
              </p>
            </li>
          </div>
        </div>
        <div className={`${isMobile ? "d-block" : "d-flex mt-4"}`}>
          {!isMobile && (
            <>
              <div>
                <HeadingAboutH2>Our Product Range</HeadingAboutH2>
                <p className="w-75 mx-auto">
                  Explore our online store for a diverse range of gaming
                  peripherals, PC hardware, and tech accessories. Whether you're
                  looking for a high-performance graphics card, a responsive
                  gaming mouse, or the latest VR headset, we've got you covered.
                  We only stock products from reputable brands that meet our
                  stringent quality standards.
                </p>
                <HeadingAboutH2>Customer Satisfaction</HeadingAboutH2>
                <p className="w-75 mx-auto">
                  Your satisfaction is our priority. We strive to provide
                  excellent customer service, fast shipping, and hassle-free
                  returns. Our dedicated support team is ready to assist you
                  with any inquiries or concerns you may have.
                </p>
              </div>
              <ImgShadow
                src="./images/redd-f-YYMVV-qMD6Q-unsplash.jpg"
                alt=""
                style={{ width: 400, height: 450 }}
              />
            </>
          )}
          {isMobile && (
            <>
              <ImgShadow
                src="./images/redd-f-YYMVV-qMD6Q-unsplash.jpg"
                alt=""
                style={{ width: 400, height: 450 }}
                className="mt-3 ms-3"
              />
              <div>
                <HeadingAboutH2>Our Product Range</HeadingAboutH2>
                <p className="w-75 mx-auto">
                  Explore our online store for a diverse range of gaming
                  peripherals, PC hardware, and tech accessories. Whether you're
                  looking for a high-performance graphics card, a responsive
                  gaming mouse, or the latest VR headset, we've got you covered.
                  We only stock products from reputable brands that meet our
                  stringent quality standards.
                </p>
                <HeadingAboutH2>Customer Satisfaction</HeadingAboutH2>
                <p className="w-75 mx-auto">
                  Your satisfaction is our priority. We strive to provide
                  excellent customer service, fast shipping, and hassle-free
                  returns. Our dedicated support team is ready to assist you
                  with any inquiries or concerns you may have.
                </p>
              </div>
            </>
          )}
        </div>

        <h5
          className="text-center mt-5 w-75 mx-auto border border-2 py-3 px-2"
          id="About_End"
        >
          Thank you for choosing Play Tech Insider as your go-to destination for
          all things gaming and technology. Join us on this exciting journey as
          we explore the world of immersive gaming experiences and cutting-edge
          tech innovations.
          <br />
          <br />
          Level up your gaming and tech lifestyle with Play Tech Insider!
        </h5>
      </div>
    </BODY_ABOUT>
  );
}
