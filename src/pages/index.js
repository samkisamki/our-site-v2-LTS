import React, { Component } from "react"
import styled from "styled-components"

import home_splash from "../assets/splashes/home_splash.png"

import Layout from "../components/Layout"
import { TESTIMONIAL_CAROUSEL, DOWN_CURSOR } from "../constants"

import { _BigText } from "../components/Text"
import HeadingBody from "../components/HeadingWithBody"
import { Panel, NextPanel } from "../components/Panel"
import Carousel from "../components/Carousel"
import { Cursor } from "../components/Cursor"
import { Bez } from "../components/Card"
import DoubleLine from "../components/DoubleLine"

const Splash = styled.img.attrs({
  className: "w-100 mb7 pb2",
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
          <Panel justify="end">
            <_BigText className="pt5">we are Founders and Coders</_BigText>
          </Panel>
          <DoubleLine colour="yellow" />
          <Splash src={home_splash} />
          <HeadingBody title="Overview">
            Founders and Coders CIC is a UK-based nonprofit that develops and
            runs tuition-free, peer-led training programmes in web development,
            guided by our core values of cooperation, inclusion and social
            impact. We proudly collaborate with Mercy Corps and the UK
            government to deliver programmes in the Middle East and Africa.
          </HeadingBody>

          <Carousel
            type={TESTIMONIAL_CAROUSEL}
            carouselWidth="220vw"
            component={this}
          >
            <Bez />
            <Bez />
            <Bez />
            <Bez />
          </Carousel>
          <NextPanel component={this} to="/about">
            What is Founders and Coders?
          </NextPanel>
        </main>
      </Layout>
    )
  }
}

export default IndexPage
