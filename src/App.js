import './App.css';
import Navbar from './components/NavBar';
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Contato from "./pages/Contato";
import Eventos from "./pages/Eventos";
import Integrantes from "./pages/Integrantes";
import Sobre from "./pages/Sobre";
import Textos from "./pages/Textos";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Theme } from './Theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <ThemeProvider theme={Theme} >
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/sobre" element={<Sobre/>} />
                        <Route exact path="/integrantes" element={<Integrantes/>} />
                        <Route exact path="/eventos" element={<Eventos/>} />
                        <Route exact path="/calendario" element={<Calendario/>} />
                        <Route exact path="/textos" element={<Textos/>} />
                        <Route exact path="/contato" element={<Contato/>} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
        
        )
}

export default App;
