import { Route, Switch } from "react-router";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolios from "./Pages/Portfolios";
import Resume from "./Pages/Resume";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>

      <MainContentStyle>
        
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/portfolios">
            <Portfolios></Portfolios>
          </Route>
        </Switch>

      </MainContentStyle>
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
`;

export default App;
