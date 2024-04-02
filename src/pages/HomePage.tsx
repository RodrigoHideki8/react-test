import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header className="mt-5 mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Minha Empresa
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Página Inicial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sobre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="jumbotron">
          <h1 className="display-4">Bem-vindo à Minha Empresa</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            efficitur urna.
          </p>
          <hr className="my-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            efficitur urna. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Curabitur dignissim quam
            sit amet nisl volutpat, euismod tristique ligula ultrices.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Saiba mais
          </a>
        </div>
      </main>

      <footer className="mt-5">
        <div className="text-center">
          <p>&copy; 2022 Minha Empresa. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;