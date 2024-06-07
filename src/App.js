import { BrowserRouter,Routes} from "react-router-dom";
import Header from "./Components/Header";
import "./styles/App.scss"
import "./styles/Header.scss"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    
    </Routes>
        </BrowserRouter>
  );
}

export default App;
