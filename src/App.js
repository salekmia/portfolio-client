import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>

      <MainContentStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Home></Home>
      </MainContentStyle>
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  .lines {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
