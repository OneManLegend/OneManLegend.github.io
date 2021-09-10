import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { heightFactor, leftSectionWidthFactor, rightSectionWidthFactor } from '../constants';
import syed from '../images/syed.png'
import linkedIn from '../images/linkedin 1.png'
import resume from '../images/resume.png'
import button from '../images/button.png'
import github from '../images/github.png'
const LayoutContainer = styled.div`
width: 100%;
height: 100vh;
display:flex ;
align-items: center;
justify-content: center;
@media (max-width:1200px){
  flex-direction: column;
}
`
const LeftSection = styled.div`
 width: 20% ;
 height: 70vh ;
 background:#F3F3F3 ;
 display : flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 border-radius: 16px;
 & > img {
     min-width: 90px ;
     max-width: 120px;
     width: 30%;
 }
@media (max-width:1200px){
  width: 100%;
  font-size: max(1.5vw,12px) ;
  height: 50%;
  background: white;
  & > img {
      width: 15%;
      
  }
  border-radius: 0;
}
`
const RightSection = styled.div`
margin-left: 2%;
 width: 50% ;
 padding-top:4% ;
height: 70vh ;
 background:#F3F3F3 ;
 position: relative;

 border-radius:16px ;
@media (max-width:1200px){
    font-size: 12px;
  width: 100%;
  height: 50%;
  margin: 0;
}
`
const AppBar = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 13%;
 border-radius: 16px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 4%;
 background: white;

 color: rgb(0,0,0,0.7);
@media (max-width:1200px){
    margin-top: 2%;
   
    flex-direction: column;
    background: inherit;
}

`
const Title = styled.div`

 font-size : 1.5rem ;
@media (max-width:1200px){
    font-size: 1.7rem;
}
@media (max-width:1200px){
    font-size: 1.2rem;
}
`
const Navs = styled.nav`
min-width: 40%;
 display: flex;
 align-items: center;
 justify-content: space-around;
@media (max-width:1200px){
    margin-top: 2%;
    font-size: max(1.5vw,12px);
    min-width: 50% ;
}
@media (max-width:500px){
  min-width: 60% ;
}
`
const Nav = styled.span`
cursor:pointer;
 & > a {
     text-decoration:  ${props=>props.active ? 'underline':'none'};
 color: ${props=>props.active ? '#9361C9':'inherit'};
 }
`
const ChipTitle = styled.span`
margin-top: 3%;
 margin-bottom: 5%;
 border-radius: 27px;
 padding: 1.5% 2%;
  color:#BC009E;
  background-image: url(${button});
  background-size:100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`
const IconsContainer = styled.div`
 margin: 5%;
 display: flex;
 align-items: center;
 width: 30%;
 justify-content: space-evenly;
 & > img {
     width: 30% ;
 }
@media (max-width:1200px){
    margin: 1%;
  width: 10%;
}
`
function Layout({children,title,active}) {
    return (
        <LayoutContainer>
        <LeftSection>
          <img src={syed} alt="syed"/>
          <h2>Syed Wadood</h2>
          <ChipTitle>Software Engineer</ChipTitle>
          <IconsContainer>
             <img src={linkedIn} alt="linkedIn"/> 
             <img src={resume} alt="resume"/> 
             <img src={github} alt="github"/> 
          </IconsContainer>
        </LeftSection>
        <RightSection>
            <AppBar>
            <Title>{title}</Title> 
            <Navs>
                 <Nav active={active == 1}> <Link to="/"  >About me</Link></Nav>
                <Nav active={active == 2}><Link to="/portfolio">Portfolio</Link></Nav>
                <Nav active={active == 3}><Link to="/contact">Contact</Link></Nav>
            </Navs>
            </AppBar>
           {children} 
        </RightSection>
        </LayoutContainer>
    )
}

export default Layout
