import styled from 'styled-components';

const ContainerSeparador = styled.div`
    width: 100%;
`;

const LinhaSeparador = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: #000000;
    width: 100%;
`;

const Separador = () =>
(
    <ContainerSeparador>
        <LinhaSeparador style={{ marginLeft: "-45%"}}></LinhaSeparador>
        <LinhaSeparador style={{ marginLeft: "45%", marginTop: "5px" }}></LinhaSeparador>
    </ContainerSeparador>
);

export default Separador;