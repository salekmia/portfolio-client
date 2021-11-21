import styled from "styled-components";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <AppStyled>
      <Sidebar></Sidebar>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: red;
`;

export default App;
