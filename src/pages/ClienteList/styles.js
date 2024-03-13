import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const ItemLista = styled.li`
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline:none;
`;

export const ModalContainer = styled.div`

  position: fixed;
  top: 50%;
  left: 60%; 
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 30%; 
`;

export const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block; 
  margin: 20px auto 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
  margin-top: 20px; 
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;
