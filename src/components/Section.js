import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>

        <ButtonCnt>
        <ButtonGrp>
            <LeftButton>
                Custom Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGrp>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </ButtonCnt>
    </Wrap> 
  )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    background-image: url("/images/model-s.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
`

const ButtonGrp = styled.div`
    margin-bottom: 30px;
    display: flex;
    gap: .5rem;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26 , 32, 0.8);
    color: white;
    height: 40px;
    width: 256px;
    border-radius: 100px;
    opacity: 0.8;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black; 
    opacity: 0.7;
`
const DownArrow = styled.img`
    height: 40px;
    margin-top: 20px;
    animation: animateDown infinite 1.5s;
`
const ButtonCnt = styled.div`` 