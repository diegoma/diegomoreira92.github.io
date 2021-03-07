import styled from 'styled-components';

const Secao = styled.div`
  margin-top: 20px;

  h3 {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: ${({ alignTitle }) => alignTitle};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 30px;

    &:after {
      display:block;
      width: 100%;
      content: '';
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-align: justify;
  }

  p + p {
    margin-top: 15px;
  }
`;

export default Secao;