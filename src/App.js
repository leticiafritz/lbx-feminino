import './App.css';
import Navbar from "./Navbar"
import Home from "./pages/Home"
import Calendario from "./pages/Calendario"
import Contato from "./pages/Contato"
import Eventos from "./pages/Eventos"
import Sobre from "./pages/Sobre"

function App() {
    let Component
    switch (window.location.pathname){
        case "/":
            Component = Home
            break
        case "/eventos":
            Component = Eventos
            break
        case "/calendario":
            Component = Calendario
            break
        case "/sobre":
            Component = Sobre
            break
        case "/contato":
            Component = Contato
            break
    }
    return (
        <>
        <Navbar />
        <Component />
        </>
        )
}

export default App;
