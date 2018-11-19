import React, { Component, Fragment } from "react"
import styled from "styled-components"

import home_splash from "../assets/splashes/temp_home_image.png"
import dwyl from "../assets/logos/cooperate_logos/dwyl_grayscale.png"
import gaza_sky_geeks from "../assets/logos/cooperate_logos/gaza_sky_geeks_grayscale.png"
import outlandish from "../assets/logos/cooperate_logos/outlandish_grayscale.png"
import space4 from "../assets/logos/cooperate_logos/Space4.svg"
import cotech from "../assets/logos/cooperate_logos/cotech_grayscale.png"
import infact from "../assets/logos/cooperate_logos/infact_grayscale.png"

import { TESTIMONIAL_CAROUSEL, DOWN_CURSOR } from "../constants"

import Layout from "../components/Layout"
import { _BigText, SmallUnderline } from "../components/Text"
import HeadingBody from "../components/HeadingWithBody"
import { Panel, NextPanel } from "../components/Panel"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import { Amelie, Helen, Owen, Ruth, Fatimat } from "../components/Card"
import DoubleLine from "../components/DoubleLine"
import { SplashPhoto } from "../components/SplashPhoto"

import FlickityCarousel from "../components/FlickityCarousel"
import BackgroundImg from "../components/BackgroundImg"
import InnerGridContainer from "../components/InnerGridContainer"

import stripey_small from "../assets/ui/stripey_small.svg"

const StripeyContainer = styled.div.attrs({
  className: `${({ className }) => className}`,
})`
  background: url(${stripey_small}) repeat;
  padding-top: 50%;
  clip-path: polygon(0 100%, 0 2%, 25% 0, 50% 2%, 75% 0, 100% 2%, 100% 100%);
`

const FacsterCards = ({className}) => (
  <StripeyContainer className={className}>
    <Amelie />
    <Helen />
    <Owen />
    <Ruth />
    <Fatimat />
  </StripeyContainer>
)

const PartnerLogo = styled(BackgroundImg).attrs({
  className: "h4 w5 mt5-ns mt4 mh4 mb3",
  bgSize: "contain",
})``

class IndexPage extends Component {
  state = {
    cursor: DOWN_CURSOR,
  }

  render() {
    const { cursor } = this.state
    return (
      <Layout>
        <Cursor cursor={cursor} colour="blue" />
        <main>
          <InnerGridContainer>
            <Panel justify="center justify-end-ns">
              <_BigText className="pt5 ph1 ph0-ns w-100 w-75-ns">
                we are Founders and Coders
              </_BigText>
            </Panel>
            <DoubleLine colour="yellow" />
            <SplashPhoto src={home_splash} />
            <HeadingBody title="Overview" className="mh2 mh0-ns mb7-ns mb5">
              Founders and Coders CIC is a UK-based nonprofit that develops and runs tuition-free, peer-led training programmes in web development, guided by our core values of cooperation, inclusion and social impact. Our Tech for Better programme pairs nonprofits and social entrepreneurs with developers in London and Palestine to design, test and build new digital services. We operate in London and work with Mercy Corps and the UK government to deliver programmes in the Middle East and Africa. 
            </HeadingBody>
          </InnerGridContainer>

          <section className="mb7-ns mb5">
            <InnerGridContainer>
              <SmallUnderline className="ml2 ml6-ns">
                We proudly co-operate with
              </SmallUnderline>
            </InnerGridContainer>
            <FlickityCarousel
              options={{
                initialIndex: 4,
                prevNextButtons: false,
                pageDots: false,
                autoPlay: 1300,
                pauseAutoPlayOnHover: false,
                wrapAround: true,
              }}
            >
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={space4} />
              <PartnerLogo src={cotech} />
              <PartnerLogo src={gaza_sky_geeks} />
              <PartnerLogo src={dwyl} />
              <PartnerLogo src={infact} />
              <PartnerLogo src={outlandish} />
              <PartnerLogo src={space4} />
              <PartnerLogo src={cotech} />
              <PartnerLogo src={gaza_sky_geeks} />
            </FlickityCarousel>
          </section>
          <Carousel
            type={TESTIMONIAL_CAROUSEL}
            carouselWidth="350vw"
            carouselLength="230vw"
            component={this}
            carouselClass="padding-left: 300px;"
          >
            <Amelie />
            <Helen />
            <Owen />
            <Ruth />
            <Fatimat />
          </Carousel>
          <FacsterCards className="db dn-ns"/>
          <NextPanel component={this} to="/about">
            What is Founders and Coders?
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
