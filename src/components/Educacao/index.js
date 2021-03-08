import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
import CaixaEducacao from "../CaixaEducacao";
import Secao from "../Secao";

const EducacaoWrapper = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li {
    float: left;
    margin-bottom: 15px;
    margin-right: 10px;
  }
`;

const Educacao = function (props) {
  return (
    <Secao floatTitle={"right"}>
      <h3>
        {props.educacao.title}
      </h3>
      <Grid columns={10}>
        <Cell width={10}>
          <EducacaoWrapper>
          {
            props.educacao.cursos.map((result, index) => (
              <li key={`${index}`}>
                <CaixaEducacao blockType={(index%2)} curso={result}>
                </CaixaEducacao>
              </li>
            ))
          }
          </EducacaoWrapper>
        </Cell>
      </Grid>
    </Secao>
  )
}

export default Educacao;