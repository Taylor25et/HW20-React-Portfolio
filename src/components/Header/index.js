
export default function Header({ setPage }) {
  return (
    <header>
      <h1>Hello</h1>
      <nav>
        <a href="#about" onClick={() => setPage("about")}>
          About
        </a>
        <a href="#portfolio" onClick={() => setPage("portolfio")}>
          Profolio
        </a>
        <a href="#services" onClick={() => setPage("services")}>
          Services
        </a>
        <a href="#contact" onClick={() => setPage("contact")}>
          Contact
        </a>
      </nav>
    </header>
  );
}

