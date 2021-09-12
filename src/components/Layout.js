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
width: 100vw;
min-height: 100%;
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
 min-height: 50vh;
 background:#F3F3F3 ;
 display : flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 border-radius: 16px;
 & > img {
     min-width: 90px ;
     max-width: 180px;
     width: 45%;
 }
@media (max-width:1200px){
  width: 100%;
  font-size: max(1.5vw,12px) ;
  height: 50%;

  background: white;
  & > img {
      width: 20%;
      
  }
  border-radius: 0;
}
`
const RightSection = styled.div`
margin-left: 2%;
 width: 50% ;
 display: grid;
 place-items: center;
 padding-top:4% ;
  height: 70vh ;
 background:#F3F3F3 ;
 position: relative;
 border-radius:16px ;
@media (max-width:1200px){
    font-size: 12px;
  width: 100%;
  margin: 0;
  height:max-content; 
  min-height: 50vh;
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}
`
const AppBar = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 13%;
 max-height: 80px;
 border-radius: 16px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 4%;
 background: white;

 color: rgb(0,0,0,0.7);
@media (max-width:1200px){
    margin-top: 2%;
   
 padding: 0 ;
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
text-decoration: none;
     border-bottom:  ${props=>props.active ? 'solid #9361C9 1px':'none'};
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
  & > h3 {
background: rgb(112,181,239);
background: linear-gradient(90deg, rgba(112,181,239,1) 0%, rgba(159,70,189,1) 80%, rgba(165,55,182,1) 100%, rgba(0,212,255,1) 100%);
 background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  } 
`
const IconsContainer = styled.div`
 margin: 5%;
 display: flex;
 align-items: center;
 width: 30%;
 justify-content: space-evenly;
 & > a > img {
   min-width: 40px;
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
          <br/>
          <ChipTitle><h3>Software Engineer</h3></ChipTitle>
          <IconsContainer>
<a href="https://www.linkedin.com/in/abdul-wadood-syed-978085220/"><img src="https://img.icons8.com/nolan/64/linkedin-circled.png"/></a>
<a href="resume.pdf" download><img src="https://img.icons8.com/nolan/64/open-resume.png"/></a>
<a href="https://github.com/4bdulWadood"><img src="https://img.icons8.com/nolan/64/github.png"/></a>
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
