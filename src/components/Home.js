import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
         <Section 
            title="Model S" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-s.jpg" 
            LeftButtonTxt="Custom Order" 
            RightButtonTxt="Existing Inventory" />
        <Section
            title="Model 3" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-3.jpg" 
            LeftButtonTxt="Custom Order" 
            RightButtonTxt="Existing Inventory" />
        <Section
            title="Model X" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-x.jpg" 
            LeftButtonTxt="Custom Order" 
            RightButtonTxt="Existing Inventory"/>
         <Section
            title="Model Y" 
            description="Order Online for Touchless Delivery" 
            backgroundImg="model-y.jpg" 
            LeftButtonTxt="Custom Order" 
            RightButtonTxt="Existing Inventory" />
        <Section
            title="Lowest Cost Solar Panels in America" 
            description="Money-back guarantee" 
            backgroundImg="solar-panel.jpg" 
            LeftButtonTxt="Order Now" 
            RightButtonTxt="Learn More"/>
         <Section
            title="Solar for New Roofs" 
            description="Solar Roof Costs Less Than a New Roof" 
            backgroundImg="solar-roof.jpg" 
            LeftButtonTxt="Order Now" 
            RightButtonTxt="Learn More"/>
         <Section
            title="Accessories" 
            description=" " 
            backgroundImg="accessories.jpg" 
            LeftButtonTxt="Shop Now" 
            RightButtonTxt=""/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`