import React from 'react'
import styled from 'styled-components'

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImg}>
        <ItemText >
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ItemText>

        <BtnContainer>
        <ButtonGrp>
            <LeftButton>
            {props.LeftButtonTxt}
            </LeftButton>
            <RightButton>
            {props.RightButtonTxt}
            </RightButton>
        </ButtonGrp>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
        </BtnContainer>
    </Wrap> 
  )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh; 
    //background-image: url("/images/model-s.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-image: ${props => `url("../images/${props.bgImage}")`};
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
    opacity: 0.9;
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
const BtnContainer = styled.div``