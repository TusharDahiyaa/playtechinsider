import React from "react";
import styled from "styled-components";

const HeadingAboutH3 = styled.h1`
  font-size: 1.5rem;
  color: #e84545;
  text-align: center;
  margin-bottom: 2%;
  margin-top: 5%;
`;

const BODY_ABOUT = styled.div`
  @media (max-width: 575.98px) {
    p {
      font-size: 1rem;
    }

    #unbiasedReview {
      width: 80% !important;
    }

    text-align: justify;
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

export default function Contact() {
  return (
    <BODY_ABOUT>
      <div className="container text-light fs-5 text mb-5">
        <h1 className="text-center my-4 border border-5 p-2">Contact</h1>
        <ImgShadow
          src="./images/ella-don-kCFXVisUqug-unsplash.jpg"
          alt=""
          className="rounded mx-auto d-block"
        />
        <HeadingAboutH1>Hello there!</HeadingAboutH1>
        <p className="w-75 mx-auto">
          We're thrilled that you want to get in touch with us at Play Tech
          Insider. Whether you have questions, suggestions, or just want to say
          hello, we value your input and are here to assist you. Here's how you
          can reach us:
        </p>
        <HeadingAboutH3>Customer Support</HeadingAboutH3>
        <p className="w-75 mx-auto">
          For inquiries related to orders, products, or general assistance, our
          customer support team is ready to help. You can reach us via email at{" "}
          <a
            href="mailto:tushardahiya202@gmail.com"
            className="text-decoration-none"
          >
            support@playtechinsider.com
          </a>{" "}
          or by filling out the contact form below. We strive to respond to all
          queries within 24 hours.
        </p>
        <HeadingAboutH3>Business Inquiries</HeadingAboutH3>
        <p className="w-75 mx-auto">
          If you're a brand, developer, or business interested in
          collaborations, partnerships, or advertising opportunities, please
          reach out to our business team at{" "}
          <a
            href="mailto:tushardahiya202@gmail.com"
            className="text-decoration-none"
          >
            business@playtechinsider.com
          </a>
          . We're always open to exploring exciting partnerships that align with
          our mission.
        </p>
        <HeadingAboutH3>Feedback and Suggestions</HeadingAboutH3>
        <p className="w-75 mx-auto">
          We value your feedback! If you have suggestions for content,
          improvements to the site, or if there's something specific you'd like
          to see covered, drop us a line at{" "}
          <a
            href="mailto:tushardahiya202@gmail.com"
            className="text-decoration-none"
          >
            feedback@playtechinsider.com
          </a>
          . Your input helps us enhance the user experience for everyone.
        </p>
        <HeadingAboutH3>Connect on Social Media</HeadingAboutH3>
        <p className="w-75 mx-auto">
          Stay updated on the latest gaming and tech trends by following us on
          social media. Join our community on{" "}
          <a
            href="https://www.facebook.com/tushardahiya20"
            className="text-decoration-none"
          >
            Facebook
          </a>
          ,{" "}
          <a
            href="https://www.instagram.com/tushardahiyaa"
            className="text-decoration-none"
          >
            Instagram
          </a>{" "}
          for real-time updates, discussions, and behind-the-scenes glimpses.
        </p>
        <HeadingAboutH3>Visit Us</HeadingAboutH3>
        <p className="w-75 mx-auto">
          While our headquarters may not have a physical storefront, our online
          presence is where the magic happens. If you're a fellow gamer or tech
          enthusiast attending events or conventions, keep an eye out for Play
          Tech Insider — you never know where we might pop up next!
        </p>
      </div>
    </BODY_ABOUT>
  );
}
