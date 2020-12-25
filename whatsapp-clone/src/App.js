
import Sidebar from "./pages/sidebar/"
import Chat from "./pages/chat/"
import {
  AppContainer,
  StyledBody
} from "./App.syle";

function App() {
  return (
    <AppContainer>
      <StyledBody>
      <Sidebar/>
      <Chat/>
    </StyledBody>
    </AppContainer>
  );
}

export default App;
