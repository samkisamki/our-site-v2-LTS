import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { OffsetUnderlineText } from "./underlineText"

const _BigText = styled.h1.attrs({
  className: ({ colour = "black" }) => `headline fw5 w-70 ${colour}`,
})``

const Panel = styled.section.attrs({
  className: ({ justify = "between", cursor = "" }) =>
    `flex justify-${justify} ${cursor}`,
})`
  height: ${({ height }) => height};
  width: ${({ width = "inherit" }) => width};
`
const NextPanel = ({ onMouseOver, to, children }) => (
  <Link
    className="bg-black flex items-center justify-center pv5 vh-100 pointer link"
    onMouseEnter={onMouseOver}
    onMouseLeave={onMouseOver}
    to={to}
  >
    <Panel>
      <OffsetUnderlineText
        className="ml5"
        underlineColour="blue"
        colour="white"
        underlineWidth="4px"
        fontSize="font-5"
        fontWeight="fw3"
        title="Next"
      >
        Next
      </OffsetUnderlineText>
      <_BigText colour="white">{children}</_BigText>
    </Panel>
  </Link>
)

export { Panel, NextPanel }
