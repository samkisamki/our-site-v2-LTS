import React from "react"
import styled from "styled-components"

import { SmallUnderline } from "./Text"

const Container = styled.div`
  max-width: 1280px;
`

const HeadingWithBody = ({ title, className = "", bgColour, children }) => (
  <Container className={`mh2 ml7-m mh0-l ${className}`}>
    <SmallUnderline
      bgColour={bgColour}
      className="mb2 mb0-l ml6-l w-50-m w-20-l"
    >
      {title}
    </SmallUnderline>
    <div className="w-100 flex justify-end-l justify-start">
      <div className="font-2d5-l font-3-m font-4 fw3 w-75-l w-100 overflow-x-hidden mr2-m">
        {children}
      </div>
    </div>
  </Container>
)

export default HeadingWithBody
