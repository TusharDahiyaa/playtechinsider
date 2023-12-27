import React from "react";
import "./homepage.css";

export default function Homepage() {
  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <>
      <div className="container">
        <h1
          className="text-center border rounded-5 rounded-bottom-0 mt-2"
          id="title-homepage"
        >
          Play Tech Insider
        </h1>
        <div className="d-flex" id="top-area">
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade position-relative w-100 mb-2"
            // data-bs-ride="carousel" //uncomment this to make the carousel slide automatically
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img
                  src="./images/msm2_story_duo_4k_legal_2023_0.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div
                  className="carousel-caption d-md-block"
                  style={isMobile ? { fontSize: "0.8rem" } : {}}
                >
                  <h5 style={isMobile ? { fontSize: "1rem" } : {}}>
                    Marvel's Spider-Man 2 - Review
                  </h5>
                  <p>Two Spideys means double the fun.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="./images/14THGENDESKTOP.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div
                  className="carousel-caption d-md-block"
                  style={isMobile ? { fontSize: "0.8rem" } : {}}
                >
                  <h5 style={isMobile ? { fontSize: "1rem" } : {}}>
                    Intel's new 14th Gen CPUs
                  </h5>
                  <p>
                    Intel's latest 14th Gen chips are mostly a refresh with the
                    exception of the Core i7-14700K.
                  </p>
                </div>
              </div>
              <div
                className="carousel-item active"
                style={isMobile ? { fontSize: "0.8rem" } : {}}
              >
                <iframe
                  id="gtaTrailer"
                  src="https://www.youtube.com/embed/QdBZY2fkU-0?enablejsapi=1&html5=1"
                  className="d-block w-100"
                  title="GTA VI Official First look!"
                  style={
                    isMobile
                      ? { fontSize: "0.8rem", height: "18rem" }
                      : { height: 450 }
                  }
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div
                  className="carousel-caption d-md-block"
                  id="gtaCaptions"
                  style={isMobile ? { fontSize: "0.7rem" } : {}}
                >
                  <h5 style={isMobile ? { fontSize: "1rem" } : {}}>
                    GTA 6 trailer trailer leaked followed by official trailer
                  </h5>
                  <p>The official first look of Grand Theft Auto 6</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
              style={{ pointerEvents: "none" }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ pointerEvents: "auto" }}
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
              style={{ pointerEvents: "none" }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ pointerEvents: "auto" }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="ms-1">
            <div
              className="card mb-1"
              style={{ width: 540, height: 140 }}
              id="top-card"
            >
              <div className="row g-0">
                <div className="col-4 col-sm-4">
                  <img
                    src="./images/cyberpunk-2077-ultimate-edition-coming-next-month_e912.960.jpg"
                    className="img-fluid rounded h-100 p-1"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h6 className="card-title">
                      Cyberpunk 2077: Ultimate Edition Coming Next Month
                    </h6>
                    <small className="card-text">
                      CD Projekt Red has announced a Cyberpunk 2077: Ultimate
                      Edition will be released on December 5, 2023.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-1"
              style={{ width: 540, height: 150 }}
              id="top-card"
            >
              <div className="row g-0">
                <div className="col-4 col-sm-4">
                  <img
                    src="./images/mswindows2_2040.0.jpg"
                    className="img-fluid rounded w-100 h-100 p-1"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h6 className="card-title">
                      Microsoft's AI-powered Copilot for Windows 10 is now
                      available to test
                    </h6>
                    <small className="card-text">
                      Windows 10 users can now try out a preview of Copilot, the
                      AI-powered feature that was previously only available on
                      Windows 11.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-1"
              style={{ width: 540, height: 150 }}
              id="top-card"
            >
              <div className="row g-0">
                <div className="col-4 col-sm-4">
                  <img
                    src="./images/CONVERGENCE-SA-VAL-1170x658.png"
                    className="img-fluid rounded h-100 p-1"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h6 className="card-title">
                      Riot Games announces its first-ever Valorant esports
                      tournament "Convergence" in India
                    </h6>
                    <small className="card-text">
                      "Convergence" will take place December 14-17 at the Manpho
                      Convention Center in the tech hub of Bangalore, India.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div id="featured">
            <h4
              className="text-center text-info-emphasis border-bottom border-3 border-info mt-2"
              id="featured-title"
            >
              FEATURED
            </h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img
                    src="./images/f-egs.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Google was considering buying 100% of Epic with Tencent
                    </h5>
                    <p className="card-text">
                      Google and Epic Games have been going at it in a legal
                      battle for almost 3 years now. To give you a brief
                      rundown, Epic wasn't too happy about paying a 30%
                      commission to Google on every in-app purchase and setting
                      up their independent payment channel. Google was
                      definitely pissed with Epic's move and decided to kick the
                      application from their platform, Play Store. Which has led
                      to the legal battle we see today. Interestingly, new
                      documents have revealed that Google initially planned on
                      buying Epic entirely
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="./images/cod-2024.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Fresh Call of Duty 2024 Details Confirmed
                    </h5>
                    <p className="card-text">
                      Call of Duty franchise will be a new Black Ops game,
                      though its official name is still being decided
                      internally. It will take place during the Gulf War,
                      additionally touching on the global political fallout
                      after the Cold War. Currently, this new Black Ops game is
                      planned for a launch in 2024 around roughly the usual time
                      in late fall/early winter. Windows Central suggests that
                      some kind of major pre-order bonus is in consideration at
                      Activision, which would include multiple days or even
                      weeks of early access to the game.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="./images/fortnite-screenshot2023.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Fortnite "Big Bang" Event Promises New Beginning For The
                      Game, Amid Eminem Rumors
                    </h5>
                    <p className="card-text">
                      Epic Games has announced the next event for the battle
                      royale game Fortnite.The event will mark a "new beginning
                      for Fortnite," Epic said in a blog post.
                      <br />
                      Fortnite's Big Bang event starts at 11 AM PT / 2 PM ET on
                      December 2, and people can load in to the servers for the
                      special event starting 30 minutes prior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="hardware">
            <h1
              className="text-center text-info-emphasis border-bottom border-3 border-info mt-2"
              id="featured-title"
            >
              Products
            </h1>
            <div id="consoles">
              <h2 className="text-center text-light border border-5 border-primary rounded-pill mt-2 mx-auto w-25 p-2">
                Top Consoles
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 my-2">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/ps5_spiderman.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Sony PS5® Console - Marvel's Spider-Man 2 Limited
                            Edition Bundle
                          </h5>
                          <p className="card-text">
                            <b>Processor:</b> x86-64-AMD Ryzen™ “Zen 2” 8 Cores
                            / 16 Threads Variable frequency, up to 3.5 GHz
                            <br />
                            <b>GPU:</b> AMD Radeon™ RDNA 2-based graphics engine
                            Ray Tracing Acceleration Variable frequency, up to
                            2.23 GHz (10.3 TFLOPS)
                            <br />
                            <b>System Memory:</b> GDDR6 16GB 448GB/s Bandwidth
                            <br />
                            <b>SSD:</b> 1TB 5.5GB/s Read Bandwidth (Raw)
                            <br />
                            <b>PS5 Game Disc:</b> Ultra HD Blu-ray™, up to
                            100GB/disc
                            <br />
                            <b>BD/DVD drive:</b> Disc Drive portequipped with
                            Disc Drive
                            <br />
                            <b>Video Out:</b> Support of 4K 120Hz TVs, 8K TVs,
                            VRR (specified by HDMI ver.2.1)
                            <br />
                            <b>Audio:</b> “Tempest” 3D AudioTech
                            <br />
                            <b>Input/Output(Front of Console):</b> USB Type-C®
                            port (Super-Speed USB 10Gbps)
                            <br />
                            USB Type-C® port (Hi-Speed USB)
                            <br />
                            <b>Input/Output(Back of Console):</b> USB Type-A
                            port (Super-Speed USB 10Gbps)
                            <br />
                            <b>Port:</b> x2 Networking Ethernet (10BASE-T,
                            100BASE-TX, 1000BASE-T)
                            <br />
                            <b>Wi-fi:</b> IEEE 802.11 a/b/g/n/ac/ax
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/xbox-x.png"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                          style={{ backgroundColor: "whitesmoke" }}
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">Xbox Series X</h5>
                          <p className="card-text">
                            <b>Processor:</b> 8-core AMD Ryzen Zen
                            2-architecture CPU at 3.8GHz (3.6GHz with SMT)
                            <br />
                            <b>Graphics:</b> AMD Navi/RDNA 2-family GPU with 52
                            CU at 1.825GHz (12TFLOPS FP32)
                            <br />
                            <b>Video memory:</b> 16GB GDDR6 with 14Gbps 320-bit
                            interface (10GB at 560GB/s allocated to GPU, 6GB at
                            336GB/s allocated to rest of system with 3.5GB for
                            GPU)
                            <br />
                            <b>Storage:</b> 1TB NVMe SSD PCIe 4.0; 3.2 external
                            HDD support
                            <br />
                            <b>Optical drive:</b> Yes, 4K Blu-ray Maximum output
                            resolution 8K 60fps; 4K 120fps
                            <br />
                            <b>Audio:</b> Ray traced
                            <br />
                            <b>New controller features:</b>
                            Share button, Dynamic Latency Input
                            <br />
                            <b>Console streaming:</b> Yes
                            <br />
                            <b>Backward compatibility:</b>
                            Xbox One and supported Xbox 360 and Xbox games
                            <br />
                            <b>Subscription tie-in:</b> Xbox Game Pass, Xbox
                            Game Pass Ultimate
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="graphic-cards">
              <h2 className="text-center text-light border border-5 border-primary rounded-pill mt-2 mx-auto w-25 p-2">
                Top Graphic Cards
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 my-2">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/rtx-4090.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Nvidia GeForce RTX 4090
                            <br />
                            (Best Overall)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 16,432
                            <br />
                            <b>Boost clock:</b> 2,520MHz
                            <br />
                            <b>TFLOPs:</b> 82.6
                            <br />
                            <b>Memory:</b> 24GB GDDR6X
                            <br />
                            <b>Memory clock:</b> 21GT/s
                            <br />
                            <b>Memory bandwidth: </b>
                            1,008GB/s
                            <br />
                            <b>TGP</b>: 450W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/amd-graphic.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD RADEON RX 7900 XTX
                            <br />
                            (Best AMD)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 6144
                            <br />
                            <b>Boost clock:</b> 2,500MHz
                            <br />
                            <b>TFLOPs:</b> 61.4
                            <br />
                            <b>Memory:</b> 24GB GDDR6
                            <br />
                            <b>Memory clock:</b> 20GT/s
                            <br />
                            <b>Memory bandwidth: </b>
                            960GB/s
                            <br />
                            <b>TGP</b>: 355W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/rtx-4070.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Nvidia GeForce RTX 4070
                            <br />
                            (Best below $1000)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 5888
                            <br />
                            <b>Boost clock:</b> 2,475MHz
                            <br />
                            <b>TFLOPs:</b> 29.1
                            <br />
                            <b>Memory:</b> 12GB GDDR6X
                            <br />
                            <b>Memory clock:</b> 21Gbps
                            <br />
                            <b>Memory bandwidth: </b>
                            504.2GB/s
                            <br />
                            <b>TGP</b>: 200W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AMD-Radeon-RX7800XT.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD Radeon RX 7800 XT
                            <br />
                            (Best below $750)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 3840
                            <br />
                            <b>Boost clock:</b> 2,430MHz
                            <br />
                            <b>TFLOPs:</b> 37.32
                            <br />
                            <b>Memory:</b> 16GB GDDR6
                            <br />
                            <b>Memory clock:</b> 19.5Gbps
                            <br />
                            <b>Memory bandwidth: </b>
                            624.1GB/s
                            <br />
                            <b>TGP</b>: 263W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AMD-Radeon-RX6700XT.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD Radeon RX 6700 XT
                            <br />
                            (Best under $500)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 2,560
                            <br />
                            <b>Boost clock:</b> 2,581MHz
                            <br />
                            <b>TFLOPs:</b> 13.21
                            <br />
                            <b>Memory:</b> 12GB GDDR6
                            <br />
                            <b>Memory clock:</b> 16Gbps
                            <br />
                            <b>Memory bandwidth: </b>
                            384GB/s
                            <br />
                            <b>TGP</b>: 230W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AMD-Radeon-RX7600.jpg"
                          className="img-fluid rounded-start h-50"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD Radeon RX 7600
                            <br />
                            (Best Budget)
                          </h5>
                          <p className="card-text">
                            <b>Shaders:</b> 2,048
                            <br />
                            <b>Boost clock:</b> 2,625MHz
                            <br />
                            <b>TFLOPs:</b> 21.6
                            <br />
                            <b>Memory:</b> 8GB GDDR6
                            <br />
                            <b>Memory clock:</b> 18Gbps
                            <br />
                            <b>Memory bandwidth: </b>
                            288GB/s
                            <br />
                            <b>TGP</b>: 165W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="processors">
              <h2 className="text-center text-light border border-5 border-primary rounded-pill mt-2 mx-auto w-25 p-2">
                Top Processors
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 my-2">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/i7-13Gen.jpg"
                          className="img-fluid rounded-start h-75 w-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Intel Core i7-14700K
                            <br />
                            (Best Overall)
                          </h5>
                          <p className="card-text">
                            <b>Cores:</b> 20
                            <br />
                            <b>Threads:</b> 28
                            <br />
                            <b>Base clock:</b> 3.4GHz
                            <br />
                            <b>Boost clock:</b> 5.5GHz
                            <br />
                            <b>Cache:</b> 61MB
                            <br />
                            <b>TGP</b>: 125W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AMD-Ryzen5-7600X.jpg"
                          className="img-fluid rounded-start h-75 w-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD Ryzen 5 7600X
                            <br />
                            (Best Value)
                          </h5>
                          <p className="card-text">
                            <b>Cores:</b> 6
                            <br />
                            <b>Threads:</b> 12
                            <br />
                            <b>Base clock:</b> 4.7GHz
                            <br />
                            <b>Boost clock:</b> 5.3GHz
                            <br />
                            <b>Cache:</b> 38MB
                            <br />
                            <b>TGP</b>: 105W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/i9-14gen.jpg"
                          className="img-fluid rounded-start h-75 w-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Intel Core i9-14900K
                            <br />
                            (Best performance)
                          </h5>
                          <p className="card-text">
                            <b>Cores:</b> 24
                            <br />
                            <b>Threads:</b> 32
                            <br />
                            <b>Base clock:</b> 3.2GHz
                            <br />
                            <b>Boost clock:</b> 6.0GHz
                            <br />
                            <b>Cache:</b> 68MB
                            <br />
                            <b>TGP</b>: 125W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AMD-Ryzen7-7800X3D.jpg"
                          className="img-fluid rounded-start h-75 w-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            AMD Ryzen 7 7800X3D
                            <br />
                            (Best for Gaming)
                          </h5>
                          <p className="card-text">
                            <b>Cores:</b> 8
                            <br />
                            <b>Threads:</b> 16
                            <br />
                            <b>Base clock:</b> 4.2GHz
                            <br />
                            <b>Boost clock:</b> 5.0GHz
                            <br />
                            <b>Cache:</b> 104MB
                            <br />
                            <b>TGP</b>: 120W
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="gaming-laptops">
              <h2 className="text-center text-light border border-5 border-primary rounded-pill mt-2 mx-auto w-25 p-2">
                Top Gaming Laptops
              </h2>
              <div className="row row-cols-1 row-cols-md-2 g-4 my-2">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/LenovoLegionPro7i.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Lenovo Legion Pro 7i (Gen8)
                            <br />
                            (Best Overall)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> Up to Core i9 13900HX
                            <br />
                            <b>GPU:</b> RTX 4090, RTX 4080, or RTX 4070
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5
                            <br />
                            <b>Screen:</b> 2560 x 1600, 16:10 aspect ratio
                            <br />
                            <b>Storage:</b> Up to 2TB Gen 4 SSD
                            <br />
                            <b>Battery:</b> Up to 99.99Wh
                            <br />
                            <b>Weight:</b> 6.17lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/GigabyteG5.jpg"
                          className="img-fluid rounded-start w-100"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Gigabyte G5 (2023)
                            <br />
                            (Best Budget)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> Up to Intel Core i7 12th Gen
                            <br />
                            <b>GPU:</b> Up to Nvidia GeForce RTX 4060
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5-4800
                            <br />
                            <b>Screen:</b> 15.6-inch IPS 1080p @ 144Hz
                            <br />
                            <b>Storage:</b> 512GB M.2 PCIe 4.0 NVMe SSD
                            <br />
                            <b>Battery:</b> 54Wh
                            <br />
                            <b>Weight:</b> 4.19lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AsusG14.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Asus ROG Zephyrus G14 (2023)
                            <br />
                            (Best 14 inch laptop)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> AMD Ryzen 9 7940HS
                            <br />
                            <b>GPU:</b> Up to Nvidia RTX 4090
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5-4800
                            <br />
                            <b>Screen:</b> 14-inch 1600p @ 165Hz | IPS or Mini
                            LED
                            <br />
                            <b>Storage:</b> 1TB SSD NVMe PCIe 4.0
                            <br />
                            <b>Battery:</b> 76Wh
                            <br />
                            <b>Weight:</b> 3.79lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/Razer_blade15.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Razer Blade 15
                            <br />
                            (Best 15 inch laptop)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> Up to Core i9 13800H
                            <br />
                            <b>GPU:</b> Up to RTX 4070
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5
                            <br />
                            <b>Screen:</b> 1080p @ 360H or 1440p @ 240Hz
                            <br />
                            <b>Storage:</b> Up to 1TB SSD
                            <br />
                            <b>Battery:</b> 80Wh
                            <br />
                            <b>Weight:</b> 4.40lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/AsusROG17.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Asus ROG Strix Scar 17 (2023)
                            <br />
                            (Best 17 inch laptop)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> AMD Ryzen 9 7945HX
                            <br />
                            <b>GPU:</b> Up to Nvidia RTX 4090
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5-4800
                            <br />
                            <b>Screen:</b> 17.3-inch 1440p @ 240Hz
                            <br />
                            <b>Storage:</b> Up to 2TB M.2 PCIe 4.0 NVMe M.2 SSD
                            <br />
                            <b>Battery:</b> 90Wh
                            <br />
                            <b>Weight:</b> 6.61lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src="./images/Acer-PredatorHelios16.jpg"
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">
                            Acer Predator Helios 16
                            <br />
                            (Best laptop display)
                          </h5>
                          <p className="card-text">
                            <b>CPU:</b> Up to Core i9 13900HX
                            <br />
                            <b>GPU:</b> RTX 4080, RTX 4070 or RTX 4060
                            <br />
                            <b>RAM:</b> Up to 32GB DDR5
                            <br />
                            <b>Screen:</b> 16-inch, 2560 x 1600, 16:10 aspect
                            ratio, Mini LED
                            <br />
                            <b>Storage:</b> Up to 2TB M.2 PCIe 4.0 NVMe M.2 SSD
                            <br />
                            <b>Battery:</b> 90Wh
                            <br />
                            <b>Weight:</b> 5.73 lbs
                          </p>
                          <p className="card-text">
                            <small className="text-body-light">
                              Updated few months ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
