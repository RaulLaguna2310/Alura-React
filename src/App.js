import Header from "./componentes/Header";
import Search from "./componentes/Search"
import UltimosLacamentos from "./componentes/UltimosLacamentos";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <UltimosLacamentos/>
    </AppContainer>
  );
}
export default App;
