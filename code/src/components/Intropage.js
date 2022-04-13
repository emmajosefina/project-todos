import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



//styled components

const devices = {
    mobile: "(min-width: 375px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
}

const Container = styled.div`
width: 375px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media ${devices.tablet} {
    width: 768px;
}

@media ${devices.desktop} {
    width: 1025px;
}
`

const IntroHeading = styled.h1 `
color: #1D3F6F;
font-size: 34px;
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 6px;
font-family: 'Roboto', sans-serif;
`
  
const IntroPage = () => {

    return (

      <Container>
       <img src="./assets/todo-illustration.png" alt="Illustration made by pch.vector - www.freepik.com" width="300px" />

        <IntroHeading>
            Lets do it today
        </IntroHeading>

        <Link to="/app">
            <Button>Write it down</Button>
        </Link>
        </Container>
    )
}


export default IntroPage
