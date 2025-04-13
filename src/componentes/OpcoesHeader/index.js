import styled from "styled-components";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const OpcoesContainer = styled.ul`
    display: flex;
`;
const Opcao = styled.li`
  font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

function OpcoesHeader() {
  return (
    <OpcoesContainer>
      {textoOpcoes.map((texto) => (
        <Opcao>
          <p>{texto}</p>
        </Opcao>
      ))}
    </OpcoesContainer>
  );
}
export default OpcoesHeader;
