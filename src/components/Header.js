import React from "react"
import styled from "styled-components"

const H1Styled = styled.h1`
	margin-top: 40px;
	text-align: center;
	font-size: 20px;
`
const HeaderStyled = styled.header`
	background-color: #222;
	height: 150px;
	padding: 20px;
	color: white;
`

const Header = props => (
	<HeaderStyled>
		<H1Styled>
			Resize window to see how this baby takes in props and programatically
			truncates them!
		</H1Styled>
	</HeaderStyled>
)

export default Header
