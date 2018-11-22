import React, { Fragment } from "react"
import styled from "styled-components"
import { breakpoint } from "../styles/utils"

import amelieBlue from "../assets/portraits/amelie_blue.png"
import ameliePlain from "../assets/portraits/amelie_plain.png"
import fatimatBlue from "../assets/portraits/fatimat_blue.png"
import fatimatPlain from "../assets/portraits/fatimat_plain.png"
import helenBlue from "../assets/portraits/helen_blue.png"
import helenPlain from "../assets/portraits/helen_plain.png"

const Container = styled.div.attrs({
  className:
    "relative flex items-center justify-center flex-column flex-row-ns",
})`
  margin: auto;
  width: 85%;
  height: ${({ cardHeight: { s: cardHeight_s } }) => cardHeight_s};
  width: ${({ cardWidth: { s: cardWidth_s } }) => cardWidth_s};

  ${({ cardHeight: { ns: cardHeight_ns }, cardWidth: { ns: cardWidth_ns } }) =>
    breakpoint.ns`
      height: ${cardHeight_ns};
      width: ${cardWidth_ns};
  `};

  ${({ cardHeight: { m: cardHeight_m }, cardWidth: { m: cardWidth_m } }) =>
    breakpoint.m`
      height: ${cardHeight_m};
      width: ${cardWidth_m};
  `};

  ${({ cardHeight: { l: cardHeight_l }, cardWidth: { l: cardWidth_l } }) =>
    breakpoint.l`
      height: ${cardHeight_l};
      width: ${cardWidth_l};
  `};
`

const FacsterContainer = styled(Container)`
  ${breakpoint.ns`
    margin-right: 12em;
    margin-left: 12em;
    `};

  ${breakpoint.m`
    margin-right: 13em;
    margin-left: 13em;
    `};
`

const _Photo = styled.div.attrs({
  className: "db top-0 ba bw3 b--yellow",
})`
  transition: 0.75s ease;
  background: ${({ blueImg }) => `url(${blueImg})`};
  &:hover {
    background: ${({ normalImg }) => `url(${normalImg})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  width: 100%;
  height: 70vh;
  ${breakpoint.l`
    margin-bottom: 0;
    height: 70vh;
    width: 28vw;
    max-width: 500px;
    height: ${({ imgHeight = "88%" }) => imgHeight};
    padding-top: 3rem;
    left: 20%;
  `};
  ${breakpoint.m`
    width: 55vw;
  `};
`

const _StaffPhoto = styled(_Photo)`
  width: 293px;
  height: 439px;
  margin-bottom: 0;
`

const TextContainer = styled.div.attrs({
  className: "absolute flex items-end flex-column z-2",
})`
  left: -12px;
  bottom: -21px;
  ${breakpoint.ns`
    top: 2rem;
    left: 1rem;
    min-width: 50%;
    transform: translateX(-48%);
  `};
  ${breakpoint.m`
    top: 5rem;
    left: -8rem;
    min-width: 80%;
  `};
`

const Title = ({ firstName, secondName, thirdName, title }) => (
  <TextContainer>
    <Text font="ttu fw5 font-1-l font-2-m font-3">{firstName}</Text>
    <Text font="ttu fw5 font-1-l font-2-m font-3">{secondName}</Text>
    {thirdName && (
      <Text font="ttu fw5 font-1-l font-2-m font-3">{thirdName}</Text>
    )}
    <Text font="font-5 gray">{title}</Text>
  </TextContainer>
)

const StaffTextContainer = styled(TextContainer)`
  top: auto;
  right: auto;
  bottom: -5px;
  left: -45px;
  ${breakpoint.ns`
    top: 70px;
    left: 42px;
  `};
  ${breakpoint.m`
    top: auto;
    right: auto;
    left: 28px;
    bottom: 21px;
  `};
`

const StaffTitle = ({ firstName, secondName, thirdName, title, title2 }) => (
  <StaffTextContainer>
    <Text font="ttu fw5 font-1-l font-2-m font-3">{firstName}</Text>
    <Text font="ttu fw5 font-1-l font-2-m font-3">{secondName}</Text>
    {thirdName && (
      <Text font="ttu fw5 font-1-l font-2-m font-3">{thirdName}</Text>
    )}
    <Text font="font-5 gray">{title}</Text>
    {title2 && <Text font="font-5 gray">{title2}</Text>}
  </StaffTextContainer>
)

const Text = styled.span.attrs({
  className: ({ font }) => `${font} bg-white tr ph1-ns ph0`,
})`
  width: fit-content;
  letter-spacing: 0.01rem;
`

const Quote = styled.div.attrs({
  className:
    "db absolute-ns i font-4-ns font-5 pa2 pa3-ns mb4 bg-white w-100 w-50-ns",
})`
  ${breakpoint.ns`
    letter-spacing: 0;
    top: 5rem;
    right: 0;
    min-width: 50%;
    transform: translateX(38%);
  `};
  ${breakpoint.m`
    top: 5rem;
    right: -25%;
    min-width: 65%;
  `};
`

const Card = ({
  firstName,
  secondName,
  thirdName,
  title,
  normalImg,
  blueImg,
  imgHeight,
  cardWidth = { l: "50vw", m: "70vw", ns: "70vw", s: "90vw" },
  cardHeight = { l: "80vh", m: "80vh", ns: "80vh", s: "inherit" },
  quote,
}) => (
  <Fragment>
    <div className="dn-ns">
      <FacsterContainer cardWidth={cardWidth} cardHeight={cardHeight}>
        <div className="relative w-100 mb4">
          <_Photo
            normalImg={normalImg}
            blueImg={blueImg}
            imgHeight={imgHeight}
          />
          <Title
            imgHeight={imgHeight}
            firstName={firstName}
            secondName={secondName}
            thirdName={thirdName}
            title={title}
          />
        </div>
        {quote ? <Quote>{quote}</Quote> : <div />}
      </FacsterContainer>
    </div>

    <div className="dn db-ns">
      <FacsterContainer cardWidth={cardWidth} cardHeight={cardHeight}>
        <_Photo normalImg={normalImg} blueImg={blueImg} imgHeight={imgHeight} />
        <Title
          imgHeight={imgHeight}
          firstName={firstName}
          secondName={secondName}
          thirdName={thirdName}
          title={title}
        />
        {quote ? <Quote>{quote}</Quote> : <div />}
      </FacsterContainer>
    </div>
  </Fragment>
)

const StaffCard = ({
  firstName,
  secondName,
  thirdName,
  title,
  title2,
  blueImg,
  normalImg,
  imgHeight,
  cardWidth = { ns: "33%", m: "45%", s: "66%" },
  cardHeight = { ns: "50%", m: "30%", s: "17%" },
  quote,
}) => (
  <Container cardWidth={cardWidth} cardHeight={cardHeight}>
    <_StaffPhoto
      normalImg={normalImg}
      blueImg={blueImg}
      imgHeight={imgHeight}
    />
    <StaffTitle
      imgHeight={imgHeight}
      firstName={firstName}
      secondName={secondName}
      thirdName={thirdName}
      title={title}
      title2={title2}
    />
    {quote ? <Quote>{quote}</Quote> : <div />}
  </Container>
)

const Dan = () => (
  <StaffCard
    firstName="Dan"
    secondName="Sofer"
    title="Executive Director"
    imgHeight="75%"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
  />
)
const Ines = () => (
  <StaffCard
    firstName="Ines"
    secondName="Teles"
    title="Director"
    imgHeight="75%"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
  />
)

const Yvonne = () => (
  <StaffCard
    firstName="Yvonne"
    secondName="Liu"
    title="Operations and"
    title2=" international development"
    imgHeight="75%"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
  />
)

const Joe = () => (
  <StaffCard
    firstName="Joe"
    secondName="Tanner"
    title="Commercial Partnerships"
    imgHeight="75%"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
  />
)

const Rebecca = () => (
  <StaffCard
    firstName="Rebecca"
    secondName="Radding"
    title="Strategy and communications"
    imgHeight="75%"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
  />
)

const Bez = () => (
  <Card
    firstName="Besart"
    secondName="Hoxhaj"
    title="FAC cohort #2"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
    quote="“The most valuable thing I’ve taken away from the course is the community. 100%. On a personal level it helped me find a real sense of purpose when I needed one, brought on by the amount of people that have worked so hard and how much energy has been invested in it to keep it going.”"
  />
)

const Amelie = () => (
  <Card
    firstName="Amelie"
    secondName="Chan"
    title="FAC cohort #11"
    blueImg={amelieBlue}
    normalImg={ameliePlain}
    quote="“Because Founders and Coders is founded on the idea of peer-led learning, it stimulates an environment of support and mutual growth, which results in what feels like a very special community: a safe, creative space, where no question is too silly to ask and no idea is too bold to suggest.”"
  />
)
const Helen = () => (
  <Card
    firstName="Helen"
    secondName="Zhou"
    title="FAC cohort #13"
    blueImg={helenBlue}
    normalImg={helenPlain}
    quote="“Founders and Coders gave me the confidence to, given time and perseverance, grasp complex concepts which initially seemed daunting. I learned how to walk through code thoroughly and truly understand it in order to solve bugs and errors. And I discovered the joys of paired programming - that learning or tackling a problem together can be one of the most rewarding experiences. ”"
  />
)
const Owen = () => (
  <Card
    firstName="Owen"
    secondName="Turner-"
    thirdName="Major"
    title="FAC cohort #7"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
    quote="“The constant focus on pairing and working together means that you're never stuck banging your head against a wall by yourself. You always have someone else to work through the problem with you. After leaving Founders and Coders, I had a lot of faith in my own ability to learn new technologies, which was crucial when I founded my startup, Fat Llama. ”"
  />
)
const Ruth = () => (
  <Card
    firstName="Ruth"
    secondName="Uwedenimo"
    title="FAC cohort #6"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
    quote="“The best part of my experience with Founders and Coders are the people. It is a great community, with members of past cohorts teaching the current cohort. Everyone supports each other in their learning and wants to give back. ”"
  />
)
const Fatimat = () => (
  <Card
    firstName="Fatimat"
    secondName="Gbajabiamila"
    title="FAC cohort #12"
    blueImg={fatimatBlue}
    normalImg={fatimatPlain}
    quote="“Joe, our commercial manager, was supportive during and after Founders and Coders. Everybody's situation is different, which Joe recognizes and takes it into account when advising us. He listened to my concerns about working in the industry and paid attention to the kind of environment I wanted to work in, which helped him place me with my current employer, 27Partners.”"
  />
)

export {
  Dan,
  Ines,
  Yvonne,
  Joe,
  Rebecca,
  Bez,
  Amelie,
  Helen,
  Owen,
  Ruth,
  Fatimat,
}
