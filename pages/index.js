import styled from 'styled-components'
import { Grid, Cell } from "styled-css-grid";
import SiteContainer from '../src/components/SiteBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Menu from '../src/components/Menu'
import Footer from '../src/components/Footer'

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
`
export default function Home() {
  return (
    <SiteContainer>
      <Grid style={{ width: '100%' }}>
        <Cell width={12}> 
          <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />
        </Cell>

        <Cell width={12}> 
          <Menu></Menu>
        </Cell>

        <Cell width={12}> 
          <Footer></Footer>
        </Cell>
      </Grid>
    </SiteContainer>
  )
}
