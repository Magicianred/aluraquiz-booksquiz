import Head from 'next/head';
import styled from "styled-components";
import db from "../db.json";
import  Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';





export const QuizContainer = styled.section`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;









export default function Home() {
  return (
   
    <QuizBackground backgroundImage={db.bg}>
       <Head>
      <title>Books Quiz</title>
      <meta property="og:type" content="website" key="type"/>
      <meta property="og:title" content="Books Quiz" key="title" />
      <meta property="og:url" content="https://aluraquiz-booksquiz.izabella-loyse20.vercel.app/z" key="url" />
      <meta property="og:description" content="Teste os seus conhecimentos sobre os livros  nacionais e internacionais neste Quiz interativo." key="description"/>
      <meta property="og:image" content="https://images.unsplash.com/photo-1521920592574-49e0b121c964?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" key="image" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

      <QuizContainer>
      <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>


        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p> Quiz do pessoal da Imersão React da Alura !</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
       <GitHubCorner projectUrl="https://github.com/IzabellaLoyse/aluraquiz-booksquiz" /> 
    </QuizBackground>
    
  );
}
