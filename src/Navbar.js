export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">LBXF</a>
        <ul>
            <li>
                <a href="/eventos">Eventos</a>
            </li>
            <li>
                <a href="/calendario">Calendário</a>
            </li>
            <li>
                <a href="/sobre">Sobre</a>
            </li>
            <li>
                <a href="/contato">Contato</a>
            </li>
        </ul>
    </nav>
}