import styled from 'styled-components'
import SiteBackground from '../src/components/SiteBackground';
import GitHubCorner from '../src/components/GitHubCorner';

const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
`
export default function Home() {
  return (
    <SiteBackground>
      <Title>Fale mais...</Title>
      <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />
    </SiteBackground>
  )
}
