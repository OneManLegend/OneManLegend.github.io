import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components';
import mongo from '../images/mongodb 1.png'
import react from '../images/react.png';
import node from '../images/node.png'
import figma from '../images/figma.png'
import python from '../images/python.png'
import sqlite from '../images/sqlite.png'
const Skills = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-evenly;
 border-radius: 16px;
background: white;
width: 60%;
min-height: 50%;
padding: 1%;
max-width: 400px;
`
const SkillsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap:2vw;

`
const Skill = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 & > img {
     width: 50%;
     height:50%; 
 }
`
const Container = styled.div`

height: 100%;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 flex-direction: column;
 padding-left: 4%;
 padding-right: 4%;
 padding-bottom: 1%;
 @media (max-width:1200px){
     height: 90%;
     margin-top: 10% ;
     font-size: max(1.5vw,10px);
 }
 @media (max-width:500px){
     margin-top: 12% ;
}
`
 function About() {
    const skills = [{
             image:mongo,
             title:'MongoDB'
    },{
             image:react,
             title:'React JS'
    },{
             image:node,
             title:'Node JS'
    },{
             image:figma,
             title:'Figma'
    },{
             image:python,
             title:'Python'
    },{
             image:sqlite,
             title:'SQLite'
    }]
    return (
        <Layout title="About Me" active={1}>
          <Container>
           <p  style={{width:'80%'}} >I am a 21 year old software engineering student at <span style={{"color":"#9F62C8"}}>Ryerson</span><span  style={{"color":"#44B0F4"}} > University</span>.Currently, I am seeking a 8-16 month co-op position or a summer 2021 internship.</p> 
           <p style={{width:'80%'}} >I have internship and project based experience with JavaScript and done coursework in Java and C#</p>
           <Skills>
               <h1>Skills</h1>
               <SkillsGrid>
                    {skills.map((skill)=><Skill key={skill.title}>
                        <img  src={ skill.image} alt={skill.title} />
                        <h4>{skill.title}</h4>
                    </Skill>)}
               </SkillsGrid>
           </Skills>
</Container>
        </Layout>
    )
}

export default About
