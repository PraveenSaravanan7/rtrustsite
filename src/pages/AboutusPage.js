import React, { useState } from "react";
import { Header } from "../components/Header";
import userpic from "../assets/image/user.svg";
import vision from "../assets/image/visionary.svg";
import mission from "../assets/image/mission.svg";
import target from "../assets/image/target.svg";
export const AboutusPage = () => {
  var [aboutus, setaboutus] = useState(false);

  return (
    <div>
      <Header home={false}></Header>
      <div data-aos="fade-up">
        <div className="row mt-4">
          <div className="col-md-6">
            <h2 className="font-weight-bold subtitle">About Us</h2>
            <p className="mt-2 text-small">
              Rahma welfare Charitable trust was started with the idea of
              providing a helping hand to those who need it the most. We strive
              to provide basic amenities to the poorest of poor, irrespective of
              caste, culture and race.
              {!aboutus && (
                <span
                  onClick={() => {
                    setaboutus(true);
                  }}
                  className="text-primary font-weight-bold"
                >
                  {" "}
                  Read More
                </span>
              )}
              {aboutus && (
                <>
                  <br />
                  <br />
                  We strive for the well-being of helpless & widowed women, by
                  helping them with a start up business, so they can earn a
                  living on their own. Orphaned/underprivileged children with
                  special-need ma are provided with financial help to continue
                  their education and not be the victim of child labour. We
                  provide necessary medical help for people who can’t afford it.
                  (Healthcare beds, wheelchairs, etc.,)
                  <br />
                  <br />
                  On a weekly basis, we provide poverty-stricken families with
                  groceries. (Rice, dal, flour,etc.,)
                  {aboutus && (
                    <span
                      onClick={() => {
                        setaboutus(false);
                      }}
                      className="text-primary font-weight-bold"
                    >
                      {" "}
                      Read Less
                    </span>
                  )}
                </>
              )}
            </p>
          </div>
          <div className="col-md-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-weight-bold subtitle">Our Future Mission</h2>
              <p className="mt-2 text-small">
                At share to care foundation, our aim is to establish a safe home
                and provide basic amenities for widowed women, orphaned children
                and senior citizens, who are not supported by their families.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="mt-4 font-weight-bold subtitle">Our Statements</h2>
        <div className="row mt-2">
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-4" src={vision} />
            <h4>
              <b>Vision</b>
            </h4>
            <p className="text-muted text-small">
              To build a community that is united and strive towards alleviating
              poverty by reaching out and assisting those in need.
            </p>
          </div>
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-4" src={mission} />
            <h4>
              <b>Mission</b>
            </h4>
            <p className="text-muted text-small">
              To serve the community by providing lifesaving essentials to
              enable the impoverished to survive, grow and build a better future
              with dignity.
            </p>
          </div>
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-4" src={target} />
            <h4>
              <b>Goals</b>
            </h4>
            <p className="text-muted text-small">
              To build trust, inspire and encourage people to share their wealth
              and provide equal opportunities to the needy.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="mt-4 font-weight-bold subtitle">Testimonial</h2>
        <div className="row mt-2">
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>
                Rahma welfare trust, wonderful Organisation which Supports the
                unprivileged people. They provide good track record, and does so
                much for the poor & needy . You guys are amazing. Keep up doing
                your best work and thanks for making me a part of helping the
                needy.
              </i>
              <br />
              <b>-Jazakallah Khair</b>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>
                Sadqha group is very useful for needy people, widows, orphanage
                people too. I am glad to joined this group. I am feeling happy
                to say that am also contributing for needy people. Jazak allahu
                khairen for giving this opportunity. May Allah fulfill all
                satisfaction in every ones life. Aameen.
              </i>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>Assalamualaikum wa rahamatullahi wa barrkathahu</i>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>Assalamualaikum wa rahamatullahi wa barrkathahu</i>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>Very nice group ma sha Allah.</i>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>
                Transparency is there which is very important in every
                organisation
              </i>
            </span>
          </div>
          <div className="col-md-4 mt-3 rounded-lg py-2 mb-2 shadow-sm">
            <span className="text-small">
              <i>Keep the good work 👍</i>
            </span>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="mt-4 font-weight-bold subtitle">Our Team</h2>
        <div className="row mt-2">
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-2" src={userpic} />
            <h5>Shameera Sultana</h5>
            <span className="text-small">
              <b>Founder</b>
            </span>
            {/* <p className="text-muted text-small" >B.sc Nutrition and dietetics (WCC), Islamic studies (TTIS - AHI academy t.nagar Chennai)</p> */}
          </div>
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-2" src={userpic} />
            <h5>Fazulath Fathima</h5>
            <span className="text-small">
              <b>Secretary</b>
            </span>
            {/* <p className="text-muted text-small" >B.sc Nutrition and dietetics (WCC), Islamic studies (TTIS - AHI academy t.nagar Chennai)</p> */}
          </div>
          <div className="col-md-4 mt-3 text-center">
            <img className="img-fluid-icon mb-2" src={userpic} />
            <h5>Asma</h5>
            <span className="text-small">
              <b>Treasure</b>
            </span>
            {/* <p className="text-muted text-small" >B.sc Nutrition and dietetics (WCC), Islamic studies (TTIS - AHI academy t.nagar Chennai)</p> */}
          </div>
        </div>
      </div>

      <div className="text-center mt-5 mb-3">
        <h6 className="text-muted">
          © Copyright Rahma Welfare Charitable Trust. All Rights Reserved.
        </h6>
      </div>
    </div>
  );
};
