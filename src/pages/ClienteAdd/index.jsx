

import { useState } from "react";
import { apiCodeBurguer } from "../../services/api";
import { Container,Form, Input, Button } from "./styles";

// Componente para adicionar novos clientes, incluindo as coordenadas X e Y.
function ClienteAdd() {
  
  // Estados para gerenciar os valores dos inputs do formulário.
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [coordenadaX, setCoordenadaX] = useState("");
  const [coordenadaY, setCoordenadaY] = useState("");

  // Função chamada quando o formulário é submetido.
  const handleSubmit = (e) => {
    e.preventDefault();// Previne o comportamento padrão do formulário.

     // Realiza uma chamada POST para adicionar o novo cliente.
    apiCodeBurguer
      .post("/clientes", {
        nome,
        email,
        telefone,
        coordenada_x: coordenadaX,
        coordenada_y: coordenadaY,
      })
      .then((response) => {
        alert("Cliente adicionado com sucesso!");
        // Limpa os campos do formulário após o sucesso.
        setNome("");
        setEmail("");
        setTelefone("");
        setCoordenadaX("");
        setCoordenadaY("");
      })
      .catch((error) => console.error("Erro ao adicionar cliente:", error)); // Trata erros na requisição.
  };
  // Renderização do componente, incluindo o formulário para adicionar novos clientes.
  return (
    <Container>
      <h2>Adicionar Cliente</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
          required
        />
        <Input
          type="text"
          value={coordenadaX}
          onChange={(e) => setCoordenadaX(e.target.value)}
          placeholder="Coordenada X"
          required
        />
        <Input
          type="text"
          value={coordenadaY}
          onChange={(e) => setCoordenadaY(e.target.value)}
          placeholder="Coordenada Y"
          required
        />
        <Button type="submit">Adicionar</Button> {/* Botão para submeter o formulário */}
      </Form>
    </Container>
  );
}

export default ClienteAdd;
