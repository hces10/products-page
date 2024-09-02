export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© 2024 HC Listagem de Produtos Inc. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a
            href="mailto:contato@meusite.com"
            className="text-gray-400 hover:text-white mr-4"
          >
            Contato
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-cesar-estevao-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mr-4"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};