import styled from 'styled-components'

export const Container = styled.div`
`

export const Title = styled.h2`
margin: 0 0 0 30px;
color: #e5e5e5;
display: block;
font-size: 1.5em;
font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
` 

export const ImageMovie = styled.div`
display: inline-block;
width: 160px;
height: 220px;
overflow: hidden;
cursor: pointer;

img{
  box-sizing: border-box;
  display: inline-block;
  padding: 0 1px;
  position: relative;
  vertical-align: top;
  white-space: normal;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;
}
img:hover{
  transform: scale(1);
}

` 

export const ListArea = styled.div`
padding-bottom: 30px;
width: 6500px;
` 

