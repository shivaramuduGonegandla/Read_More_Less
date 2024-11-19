import styled from "styled-components";

/* Container for the entire component */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1e293b;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

/* Heading style */
export const Heading = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 16px;
`;

/* Description style */
export const Description = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  text-align: center;
  margin-bottom: 16px;
`;

/* Button style */
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #334155;
  }
`;

/* Image style */
export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
  object-fit: cover;
`;
