import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
import CaixaEducacao from "../CaixaEducacao";
import CaixaConteudo from "../CaixaConteudo"
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
  let count = 0;

  return (
    <Secao alignTitle={"right"}>
      <header>
        <h3>
          {props.educacao.title}
        </h3>
      </header>
      <Grid columns={10}>
        <Cell width={10}>
          <EducacaoWrapper>
            {
              props.educacao.cursos.map(function (result, index)
                {
                  count++;
                  return ( 
                    <li key={`${index}`}>
                      <CaixaEducacao blockType={(index%2)} curso={result}>
                      </CaixaEducacao>
                    </li>
                  )
                } 
              )
            }  

            <li key={`${count+1}`}>
              <CaixaConteudo blockType={`${count+1}`}>
                <div>
                  <h4>
                    {props.educacao.idiomas.titulo}
                  </h4>
                  <ul>
                    {
                      props.educacao.idiomas.linguas.map((result, index) => (
                        <li key={`${index}`}>
                          <h6>{result.titulo}</h6>
                          <p>{result.nivel}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h4>
                    {props.educacao.cursosAvulsos.titulo}
                  </h4>
                  <p>
                    {props.educacao.cursosAvulsos.cursos}
                  </p>
                </div>
              </CaixaConteudo>
            </li>

          </EducacaoWrapper>
        </Cell>
      </Grid>
    </Secao>
  )
}

export default Educacao;