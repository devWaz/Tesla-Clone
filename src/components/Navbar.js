import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {selectCars} from '../features/car/carDetails';
import {useSelector} from 'react-redux';

function Navbar() {
    const [navBtnStatus , setnavBtnStatus] = useState(false);
    const cars = useSelector(selectCars);

  return (
    <Container>
            <a href='#'>
                <img src="/images/teslaLogo.svg" alt="Tesla Logo" className='logo' />
            </a>
            <Menu>
            {cars && cars.map((car , index) =>(
                    <a href="#" key={index}>{car}</a>
                ))}
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <section>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                </section>
            <IconMenu onClick={() => setnavBtnStatus(true)}/>
            </RightMenu>

            <SideNav show={navBtnStatus}>
                <CloseBtnContainer>
                    <CloseBtn onClick={() => setnavBtnStatus(false)}/>
                </CloseBtnContainer>
                {cars && cars.map((car , index) =>(
                    <li key={index}><a href="#"> { car }</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </SideNav>

        </Container>
  )
}

export default Navbar;

const Container = styled.div`
    min-height: 50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;  
    
    a {
        font-weight: 600;
        padding: 0 10px;
    }
    @media (max-width: 768px){
        display: none;
        border: 1px solid red;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    section {
        @media (max-width: 768px){
            display: none;
        }
    }
    a {
        font-weight: 600;
        margin-right: 30px;
    }
`

const IconMenu = styled(MenuIcon)`
    cursor: pointer;
`
const SideNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    padding-left: 30px;
    background-color: white;
    width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: left;
    transform: ${props => props.show ? 'translate(0)' : 'translate(100%)'};
    transition: transform 0.3s ease-out;
    li{
        padding: 15px 0;
        a {
            font-weight: 600;
            font-size: 15px;
        }
    }
    
    @media (max-width: 768px){
        width: 200px;
        overflow-y: scroll;
    }
`

const CloseBtn = styled(CloseIcon)`
    margin-left: auto;
    cursor: pointer;
`

const CloseBtnContainer = styled.div`
    display: flex;
` 