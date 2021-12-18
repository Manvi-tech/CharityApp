import React from "react";
import Header from "./Header";

function About() {
  return (
    <div>
      <Header />
      <section class="section" id="about">
        <div class="container">
          <div class="row margin-bottom">
            <div class="col-12">
              <div class="heading heading--primary heading--center">
                <span class="heading__pre-title">What We do</span>
                <h2 class="heading__title no-margin-bottom">
                  <span>We do it</span> <span>for all people</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row offset-margin">
            <div class="col-sm-6 col-lg-3">
              <div class="icon-item text-left text-center text-sm-left">
                <div class="icon-item__img">
                  <svg
                    class="
                        icon
                        icon-item__icon icon-item__icon--smaller
                        color--blue
                      "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-journal"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                    </svg>
                  </svg>
                </div>
                <div class="icon-item__text">
                  <p class="color--blue">CLASSROOM SUPPORT</p>
                  <span>UPLIFT A VISUALLY IMPAIRED CHILD</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-item text-left text-center text-sm-left">
                <div class="icon-item__img">
                  <svg
                    class="
                        icon
                        icon-item__icon icon-item__icon--smaller
                        color--blue
                      "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </svg>
                </div>
                <div class="icon-item__text">
                  <p class="color--blue">LIVELIHOOD SUPPORT</p>
                  <span>BACK PEOPLE WITH DISABILITY</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-item text-left text-center text-sm-left">
                <div class="icon-item__img">
                  <svg
                    class="
                        icon
                        icon-item__icon icon-item__icon--smaller
                        color--blue
                      "
                  >
                    <svg
                      viewBox="0 0 512 512"
                      id="blood"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M157.764 434.559c-57.058-28.643-84.583-102.22-48.983-163.75a7.5 7.5 0 00-2.735-10.249c-3.583-2.069-8.173-.85-10.249 2.736-39.956 69.06-9.481 152.18 55.237 184.67a7.501 7.501 0 106.73-13.407z"></path>
                      <path d="M469.999 392.714a7.5 7.5 0 007.501-7.501V368.89c0-6.556-5.272-11.895-11.806-11.902h-51.751v-51.804c-.008-6.481-5.348-11.753-11.902-11.753H388.67c-3.972-17.819-10.632-34.895-19.853-50.835-.083-.144-128.44-222.006-128.526-222.148-19.198-33.08-41.612-19.623-50.492-4.18-.656 1.136-128.933 222.861-130.939 226.328-66.43 114.817 10.682 257.11 138.572 268.632a7.504 7.504 0 008.144-6.798 7.501 7.501 0 00-6.798-8.144C80.996 485.676 11.359 354.653 71.845 250.107L200.31 28.057c1.009-1.745 7.094-13.281 13.563-13.078 5.398.145 10.844 8.744 13.567 13.211l128.39 221.918c7.889 13.636 13.738 28.173 17.443 43.323H334.39c-6.555 0-11.894 5.272-11.901 11.806v51.751h-51.81c-6.074.01-11.085 4.703-11.687 10.689-.04.399-.061.804-.061 1.213v67.651c0 6.555 5.272 11.894 11.806 11.901h51.752v7.257c-24.419 21.571-55.547 36.26-90.231 40.215a7.504 7.504 0 00-6.604 8.303c.47 4.116 4.202 7.076 8.303 6.603 31.259-3.565 61.771-15.303 88.531-35.736v25.163c.008 6.481 5.348 11.753 11.901 11.753h67.65c6.556 0 11.895-5.272 11.902-11.806v-51.751h51.804c6.481-.008 11.753-5.348 11.753-11.901v-16.324a7.5 7.5 0 00-7.501-7.501 7.5 7.5 0 00-7.501 7.501v13.224h-51.653c-6.564 0-11.902 5.34-11.902 11.902v51.654H337.49v-51.653c0-6.564-5.341-11.902-11.903-11.902h-51.654v-61.452h51.654c6.564 0 11.903-5.34 11.903-11.902v-51.657h61.451v51.654c0 6.564 5.34 11.902 11.902 11.902h51.654v13.224a7.503 7.503 0 007.502 7.502z"></path>
                    </svg>
                  </svg>
                </div>
                <div class="icon-item__text">
                  <p class="color--blue">RAAHI</p>
                  <span>GIFT A BETTER EYESIGHT TO TRUCK DRIVERS</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="icon-item text-left text-center text-sm-left">
                <div class="icon-item__img">
                  <svg
                    class="
                        icon
                        icon-item__icon icon-item__icon--smaller
                        color--blue
                      "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </svg>
                </div>
                <div class="icon-item__text">
                  <p class="color--blue">SIGHT RESTORING SURGERY</p>
                  <span>HELP THE VISUALLY IMPAIRED SEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
