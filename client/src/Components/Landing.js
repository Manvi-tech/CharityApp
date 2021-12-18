import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
function Landing() {
  return (
    <div>
      <Header />
      <section class="promo promo--front_2">
        <div class="promo-slider">
          <div class="promo-slider__item promo-slider__item--style-1">
            <picture>
              <source
                srcset="/images/promo_2-2.jpg"
                media="(min-width: 992px)"
              />
              <img class="img--bg" src="/images/promo_2-2.jpg" alt="img" />
            </picture>
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="align-container" style={{ marginTop: "-150px" }}>
                    <div class="align-container__item">
                      <div class="promo-slider__wrapper-1">
                        <h2 class="promo-slider__title">
                          <span>We help all people in need</span>
                        </h2>
                      </div>
                      <div class="promo-slider__wrapper-2">
                        <p class="promo-slider__subtitle">
                          Ethereum blockchain based application aimed at
                          ensuring complete transparency in charity
                          transactions.
                        </p>
                      </div>
                      <div class="promo-slider__wrapper-3">
                        <a
                          class="button promo-slider__button button--primary"
                          href="#"
                        >
                          Discover
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer" style={{ padding: "0 0 50px 0" }}>
        <div class="container">
          <div class="row align-items-baseline">
            <div class="col-md-6">
              <p class="footer-copyright">© 2021 Charity Application</p>
            </div>
            <div class="col-md-6">
              <div class="footer-privacy">
                <a class="footer-privacy__link" href="#">
                  Privacy Policy
                </a>
                <span class="footer-privacy__divider">|</span>
                <a class="footer-privacy__link" href="#">
                  Term and Condision
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
