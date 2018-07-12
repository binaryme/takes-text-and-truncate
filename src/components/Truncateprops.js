import React from "react"
import styled from "styled-components"

const H2Styled = styled.h2`
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const TruncateProps = props => <H2Styled>{props.title}</H2Styled>

export default TruncateProps
