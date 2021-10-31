import type { NextPage } from 'next'
import styled from 'styled-components'

const Home: NextPage = () => {
 return (
  <Container>
   <Title>QuaCode</Title>
   <SubTitle>NextTs Template</SubTitle>
  </Container>
 )
}

const Container = styled.div`
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
`

const Title = styled.p`
 font-size: 3em;
 font-weight: bold;
`

const SubTitle = styled.p`
 font-size: 1em;
 font-weight: 400;
`

export default Home
