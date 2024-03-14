/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { apiCodeBurguer } from "../../services/api";
import { FiTrash2 } from "react-icons/fi";
import PropTypes from "prop-types";
import {
  Container,
  Lista,
  ItemLista,
  Button,
  Input,
  ModalContainer,
  CloseButton,
  Title,
  ButtonContainer,
} from "./styles";

function ClienteList() {
  const [clientes, setClientes] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("");
  const [filtroTelefone, setFiltroTelefone] = useState("");
  const [rotaOtimizada, setRotaOtimizada] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade da modal a rota otimizada e gerenciar filtros de busca

  const buscarClientes = () => {
    apiCodeBurguer
      .get("/clientes", {
        params: {
          nome: filtroNome,
          email: filtroEmail,
          telefone: filtroTelefone,
        },
      })
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  const buscarRotaOtimizada = () => {
    apiCodeBurguer
      .get("/clientes/rota")
      .then((response) => {
        setRotaOtimizada(response.data);
        setIsModalOpen(true); // Abre a modal após buscar a rota
      })
      .catch((error) => console.error("Erro ao buscar rota otimizada:", error));
  };

  // Componente da modal simplificado
  const Modal = ({ isOpen,children }) => {
    if (!isOpen) return null;

    return (
      <ModalContainer
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          zIndex: 1000,
        }}
      >
        {children}
      </ModalContainer>
    );
  };
  Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  const excluirCliente = (id) => {
    apiCodeBurguer
      .delete(`/clientes/${id}`)
      .then(() => {
        alert("Cliente excluído com sucesso!");
        buscarClientes(); // Atualiza a lista após excluir
      })
      .catch((error) => console.error("Erro ao excluir cliente:", error));
  };

  return (
    <Container>
      <Title>Listagem de Clientes</Title>
      <Input
        type="text"
        value={filtroNome}
        onChange={(e) => setFiltroNome(e.target.value)}
        placeholder="Filtrar por nome"
      />
      <Input
        type="email"
        value={filtroEmail}
        onChange={(e) => setFiltroEmail(e.target.value)}
        placeholder="Filtrar por email"
      />
      <Input
        type="text"
        value={filtroTelefone}
        onChange={(e) => setFiltroTelefone(e.target.value)}
        placeholder="Filtrar por telefone"
      />
      <ButtonContainer>
        <Button onClick={buscarClientes}>Filtrar</Button>
        <Button onClick={buscarRotaOtimizada}>Calcular Rota Otimizada</Button>
      </ButtonContainer>
      <Lista>
        {clientes.map((cliente) => (
          <ItemLista key={cliente.id}>
            {cliente.nome} - {cliente.email} - {cliente.telefone}
            <Button onClick={() => excluirCliente(cliente.id)}>
              <FiTrash2 />
            </Button>
          </ItemLista>
        ))}
      </Lista>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Rota Otimizada</h3>
        <ul>
          {rotaOtimizada.map((cliente) => (
            <li key={cliente.id}>
              {cliente.nome} - {cliente.coordenada_x}, {cliente.coordenada_y}
            </li>
          ))}
        </ul>
        <CloseButton onClick={() => setIsModalOpen(false)}>Fechar</CloseButton>
      </Modal>
    </Container>
  );
}

export default ClienteList;
