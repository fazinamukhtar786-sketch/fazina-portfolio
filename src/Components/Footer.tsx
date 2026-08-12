function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Fazina Mukhtar. All rights
          reserved.
        </p>

        <p>Built with React & TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;