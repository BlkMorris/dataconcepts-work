<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <vue-particles
        color="eaeaea"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="1"
        linesColor="eaeaea"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
      <section class="content-block black fullpage">
        <div @click="scrollDown" class="show-more">
          <svg
            fill="#fff"
            version="1.1"
            id="Ebene_2_1_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="53px"
            height="20px"
            viewBox="0 0 53 20"
            enable-background="new 0 0 53 20"
            xml:space="preserve"
          >
            <g>
              <polygon
                points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
              ></polygon>
            </g>
          </svg>
        </div>
        <div class="header-section">
          <div class="row">
            <div class="column col-12 center-content">
              <div class="content-wrapper text-white">
                <h1 data-aos="fade-up" data-aos-duration="600">We are Data Concepts</h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >Driving Digital Transformation</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="first" class="content-block section-2">
        <!-- <div v-parallax="0.4" class="cover-image cover-image-2"></div> -->
        <div class="container">
          <div class="row">
            <div class="column col-12 center-content">
              <div class="content-wrapper">
                <div class="wrapper-2">
                  <h6>WHO WE ARE</h6>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    class="section-header home medium"
                  >Technology is our craft.</h1>
                </div>
                <div class="wrapper-3">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >We're a team of storytellers, strategists, makers, builders, designers, and engineers working together with key alliances to bring a full slate of offerings and capabilities to our clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block fullpage black">
        <!-- <div class="cover-image"></div> -->
        <!-- <video
          src="../assets/video/snowflakes.mp4"
          height="800"
          width="1424"
          preload="auto"
          autoplay
          loop
        ></video>-->
        <div class="container">
          <div class="row">
            <div class="column col-10 centered responsive-12 center-content">
              <div class="content-wrapper dynamic-text-wrapper no-pad">
                <h3>Need help</h3>
                <h3 id="dynamic-text"></h3>
                <h3>We're Here For You.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block section-5">
        <div class="container">
          <div class="row">
            <div class="column col-10 centered">
              <div class="content-wrapper service-wrapper">
                <h6>OUR SERVICES</h6>
                <h1 class="section-header home">The things we do best.</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper services-wrapper">
          <div class="service">
            <router-link class="service-link" to="/services/big-data"></router-link>
            <div id="big-data-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Big Data</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/iot"></router-link>
            <div id="iot-bround" class="service-background"></div>
            <div class="service-content">
              <h3>IoT</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/cloud"></router-link>
            <div id="cloud-bround" class="service-background"></div>
            <div class="service-content">
              <h3>Cloud</h3>
            </div>
          </div>
          <div class="service">
            <router-link class="service-link" to="/services/business-intelligence"></router-link>
            <div id="bi-bround" class="service-background"></div>
            <div class="service-content">
              <h3>BI</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="content-block fullpage section-3">
        <!-- <div class="cover-image cover-image-3"></div> -->
        <div class="container">
          <div class="row padded-large">
            <div class="column col-10 centered center-content">
              <div class="content-wrapper service-wrapper">
                <h6>OUR INSIGHTS</h6>
                <h1 class="section-header home medium">Trends that inform the world of tomorrow</h1>
                <p>Digital transformation demands new approaches.</p>
                <router-link class="reg-link margin" to="/services/digital-strategy">More</router-link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper insights-wrapper-2">
                <InsightTwo
                  data-aos="fade-up"
                  data-aos-duration="600"
                  title="A Quick Peek in to  Data Strategy"
                  summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
                  category="Data Strategy"
                  link="/insights/quick-peek"
                  imagesource="./insight-images/dance-2.jpg"
                />
                <InsightTwo
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                  link="/insights/blockchain-world"
                  category="Blockchain"
                  title="Our Insights on the World of Blockchain"
                  summary="Blockchain is one of the most dynamic inventions of this century. Though this revolutionary technology is still in its infancy, it has the potential to change how the world works."
                  imagesource="./insight-images/bridge.jpg"
                />
                <InsightTwo
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  link="/insights/data-mining"
                  category="Big Data"
                  title="Extracting Actionable Insights from Data"
                  summary="Data mining is the extraction of actionable insights from data."
                  imagesource="./insight-images/entry.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkWithUs/>
      <Subscribe/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import RelatedBox from "../components/RelatedBox.vue";
import Spacer from "../components/Spacer.vue";
import InsightTwo from "../components/InsightTwo.vue";
import Footer from "../components/service/Footer.vue";
import WorkWithUs from "../components/about/WorkWithUs.vue";
import Subscribe from "../components/about/Subscribe.vue";

export default {
  name: "Home",
  components: {
    NavBarWhite,
    ModalMenu,
    RelatedBox,
    Spacer,
    InsightTwo,
    Footer,
    WorkWithUs,
    Subscribe
  },
  data() {
    return {
      phase: 0
    };
  },
  mounted: function() {
    let i = 0;
    let phrase = "implementing cyber security?";

    let backTypeWriter = () => {
      let innerText = document.getElementById("dynamic-text").innerHTML;
      if (innerText.length > 0) {
        innerText = innerText.substring(0, innerText.length - 1);
        document.getElementById("dynamic-text").innerHTML = innerText;
        setTimeout(backTypeWriter, 30);
      } else {
        i = 0;
        typeWriter();
      }
    };

    let typeWriter = () => {
      if (this.phase === 0) {
        phrase = "integrating Cloud technology?";
      } else if (this.phase === 1) {
        phrase = "implementing Agile strategy?";
      } else {
        phrase = "developing Mobile solutions?";
      }
      if (i < phrase.length) {
        document.getElementById("dynamic-text").innerHTML += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
      } else if (i === phrase.length) {
        if (this.phase === 0) {
          this.phase = 1;
          setTimeout(backTypeWriter, 2000);
        } else if (this.phase === 1) {
          this.phase = 2;
          setTimeout(backTypeWriter, 2000);
        } else {
          this.phase = 0;
          setTimeout(backTypeWriter, 2000);
        }
      }
    };

    typeWriter();
  },
  methods: {
    scrollDown() {
      document.getElementById("first").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style scoped lang="sass">
@import "../assets/sass/settings.sass"

.header-section
  height: 100%
  width: 100%
  position: absolute
  text-align: center
  top: 0
  min-height: 100vh
  display: flex

.header-section h1
  font:
    size: 6rem
    weight: 700
    family: $font-body
  letter-spacing: 1px

.header-section h2
  font:
  letter-spacing: 4px
  margin-top: 10px
  
video
  display: block
  max-width: initial
  position: absolute
  min-width: 100%
  min-height: 100%
  width: auto
  height: auto
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)

.cover-image-2
  // background: #fff
  background-image: url(../assets/background/home/mobile.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(160deg) saturate(6)

.section-2
  background: transparent
  padding: 300px 0

.wrapper-2 
  text-align: center

.wrapper-2 h1
  font:
    size: 4rem

.wrapper-3
  text-align: center

.service-wrapper
  display: flex
  flex-direction: column
  justify-content: center
  text-align: center

.service-wrapper p
  font:
    size: 1.6rem
    weight: 400
  letter-spacing: 1px


h6
  margin-bottom: 30px
  letter-spacing: 3px
  color: #dddddd

.wrapper-3 p
  font: 
    size: 1.2rem

.cover-image-3
  background-image: url(../assets/background/home/skateboard.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(270deg) saturate(6)

.cover-image-4
  background-image: url(../assets/background/home/headshot.jpg)
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(270deg) saturate(6)
  background-position: 70% 30%

.section-4 
  background: #000

.section-5 
  flex-direction: column
  padding: 300px 0 100px

#particles-js
  width: 100%
  height: 100%
  z-index: 999
  position: absolute
  top: 0
  left: 0

.show-more
  z-index: 1000

.services-wrapper
    display: flex
    flex-wrap: wrap

.service
    flex-basis: 25%
    width: 25%
    max-width: 25%
    height: 22vw
    position: relative

.service-background
    filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(140deg) saturate(6)
    background-size: cover
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0

.service-background-2
    filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(235deg) saturate(6)
    background-size: cover
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0

.service-link
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 999    

.service-link:hover ~ .service-background
    filter: unset

.service-link:hover ~ .service-background-2
    filter: unset

.service-link:hover ~ .service-content h3:after
  opacity: 1
  transform: translatey(2px)

.service-content
  display: inline-block
  position: relative
  top: 64%
  left: 5%
  width: 90%

.service-content h3
  color: #fff
  font:
      size: 3rem
      family: $font-body
      weight: 200
  letter-spacing: 0.2rem

#big-data-bround
  background-image: url(../assets/background/services-small/big-data.jpg)

#iot-bround
  background-image: url(../assets/background/services-small/iot.jpg)

#cloud-bround
  background-image: url(../assets/background/services-small/cloud.jpg)

#bi-bround
  background-image: url(../assets/background/services-small/bi.jpg)

@media only screen and (max-width: 1500px)
  h3
    font:
      size: 2.5rem !important

@media only screen and (max-width: 1230px) 
  .service
    flex-basis: 33.3333%
    width: 33.3333%
    max-width: 33.3333%
    height: 31vw

@media only screen and (max-width: 900px) 
  .service
    flex-basis: 50%
    width: 50%
    max-width: 50%
    height: 45vw

@media only screen and (max-width: 600px) 
  .service
    flex-basis: 100%
    width: 100%
    max-width: 100%
    height: 75vw


</style>



