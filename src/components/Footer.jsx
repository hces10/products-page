export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© 2024 HC Listagem de Produtos Inc. Todos os direitos reservados.</p>
        <p>(16)981472395/hces10@gmail.com</p>
        <div className="mt-4">
          <a
            href="mailto:hces10@gmail.com"
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
            href="https://github.com/hces10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};