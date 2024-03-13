import styled from "styled-components";
import Cliente from "../../assets/Cliente.png";

export const Container = styled.div`
  background-image: url("${Cliente}");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap:10px;

  h2 {
    color:white;
    font-size:30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre os campos */
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline:0;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
