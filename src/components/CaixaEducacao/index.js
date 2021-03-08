import styled from 'styled-components';

const CaixaEducacaoWrapper = styled.div`
  padding: 10px 10px;
  height: 350px;
  width: 350px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ blockType, theme }) => blockType == 0 ?  theme.colors.secondary : theme.colors.primary };
  background-color: ${({ blockType, theme }) => blockType == 0 ? theme.colors.primary : theme.colors.secondary };

  h4 {
    clear: both;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: left;
    margin-bottom: 5px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  span {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

const CaixaEducacao = function (props) {
  return (
    <CaixaEducacaoWrapper blockType={props.blockType}>
      <header style={{ overflow: "hidden", marginBottom: "20px" }}>
        <span style={{ float: "left" }}>{props.curso.instituicao}</span>
        <span style={{ float: "right" }}>{props.curso.ano}</span>
      </header>
      <h4>{props.curso.titulo}</h4>
      <p>{props.curso.conteudo}</p>
    </CaixaEducacaoWrapper>
  );
}

export default CaixaEducacao;