import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import mongo from "../images/mongodb 1.png";
import react from "../images/react.png";
import node from "../images/node.png";
import figma from "../images/figma.png";
import python from "../images/python.png";
import sqlite from "../images/sqlite.png";
import emailjs from "emailjs-com";
import sendButton from '../images/sendButton.png';
const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: grid;
 min-height : 60vh ;
  place-items: center;
  @media (max-width:1200px){
      margin-top: 5%;
      font-size:max(1.5vw,12px);
  }
@media (max-width:500px){
  margin-top:20%; 
  }
  
`;
const Form = styled.form`
  padding: 1%;
  font-size: 13px;
  background: white;
  border-radius: 10px;
  height: 80%;
  width: 80%;
  position: relative;

  @media (max-width:1200px){
    width: 60% ;
  }
@media (max-width:500px){
  height : 60vh ;
  padding: .5%;
  width:85%;
  }
`;
const Input = styled.div`
display :flex;
flex-direction: column;
justify-content: space-evenly;
grid-area:${({gridArea})=>gridArea};
& > input {
    height: 40%;
    background: #F3F3F3;
    border: 1px solid rgba(0,0,0,0.2);
}
& > textarea {
    resize: none;
    min-height:80%;
background: #F3F3F3;
    border: 1px solid rgba(0,0,0,0.2);

}
`;
const InputsContainer = styled.div`

margin-top: 2%;
display: grid;
grid-gap: 5%;
width: 100%;
height: 90%;
grid-template-areas: 
"input1 text"
"input2 text"
"input3 text"
"button button"
;

grid-template-columns: 1fr 1fr ;
grid-template-rows: 1fr 1fr 1fr 1fr;


@media (max-width: 700px) {
 grid-template-areas  :
 "input1"
 "input2"
 "input3"
 "text"
 "button"
 ;
grid-template-columns: 1fr ;
grid-template-rows: 1fr 1fr 1fr 1fr 40px;
grid-gap: 1%;


}
`
;
const SendButton = styled.button`
height: 40%;
 width:20%;
 margin: auto;
 border: none;
 background-color: white;
 background-image: url(${sendButton});
 background-size: 100% 100%;
`

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rprmaxp",
        "template_tb71g9p",
        e.target,
        "user_hJCKEz2nj8HK9IltgQYcs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Layout title="Contact Me" active={3}>
      <Container>
        <Form onSubmit={sendEmail} id="contact-form">
          <p  style={{textAlign:'center'}}>
            Thank you for viewing my portfolio i really hope you've enjoyed
            looking at my work!
          </p>
          <InputsContainer>
            <input type="hidden" name="contact_number" />

            <Input gridArea="input1">
              <label>Name</label>
              <input type="text" name="user_name" />
            </Input>

            <Input gridArea="input2">
              <label>Email</label>
              <input type="email" name="user_email" />
            </Input>

            <Input gridArea="input3">
              <label>Company</label>
              <input type="text" name="company" />
            </Input>
            <Input gridArea="text">
              <label>Project Description / Message</label>
              <textarea name="message" />
            </Input>
  <Input gridArea="button">
  <SendButton type="submit">Send</SendButton>
            </Input>
          </InputsContainer>
        </Form>
      </Container>
    </Layout>
  );
}

export default Contact;
