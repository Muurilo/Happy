import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Done() {
  return (
    <div id="page-done">
      <div className="done-main-content">
        <main id="done-info">
          <h1>Ebaaa!</h1>
          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>
        </main>

        <Link to="/app" className="return-map">
          Voltar para o mapa
        </Link>
      </div>
    </div>
  );
}
