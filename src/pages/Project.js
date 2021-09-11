import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components';
import  project1 from '../images/image 22.png';
import  project2 from '../images/project2.png';
const Container  = styled.div`
width: 100%;
min-height:100% ;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:1200px){
     min-height: 90%;
     margin-top: 10% ;
     font-size: max(2vw,12px);
     

 }
@media (max-width:500px){
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
margin-top:15%;
margin-bottom:15%;
}
`
const Project = styled.div`

 width:18% ;
 margin-left: 3%;
 background: white;
 min-height: 12vmax ;
 border-radius: 16px;
 box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
 display: flex;
 flex-direction: column;
 justify-content:space-evenly;
 padding: 1%;
 align-items: center;
 text-align: center;
 & > img {
     width: 30%;
 }
@media (max-width:500px){
    width: 30%;
    font-size: 10px;
    margin-top: 10%;
}
`
const Stack = styled.div`
 width: 100%;
 font-size: 10px;
 display: flex;
 color: rgb(0,0,0,0.5);
 align-items: center;
 justify-content: space-around;
@media (max-width:500px){
    font-size: 8px;
}
`
 function Portfolio() {
    
    const projects = [
        {
            title:"Andie's Website for businesses",
            stack:["React","Django","Postgres"],
            image:project1
        },
 {
            title:"Chirper",
            stack:["React","Node","MongoDB"],
            image:project2
        },     ]
    return (
        <Layout title="Portfolio" active={2}>
          <Container>
          {
                projects.map(project=><Project key={project.title}>
                    <img src={project.image}/>
                    <h5 >{project.title}</h5>
                    <Stack >{project.stack.map((teck)=><span  key={project.title+teck}>{teck}</span>)} </Stack>
                </Project>)
}
          </Container> 
        </Layout>
    )
}

export default Portfolio; 
