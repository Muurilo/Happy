import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../services/api';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import happyLogo from '../../assets/images/logo-text.svg';

import './styles.css';
import PrimaryButton from '../../components/PrimaryButton';

export default function OrphanagesMap() {
  const { goBack } = useHistory();

  return (
    <div id="page-login">
      <aside>
        <header>
          <img src={happyLogo} alt="Happy" />
        </header>

        <footer>
          <strong>Franca</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <div className="login-content">
        <header>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#15C3D6" />
          </button>
        </header>
        <main>
          <h1>Fazer login</h1>
          <div className="form-container">
            <form>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="E-mail" id="email" />
              <label htmlFor="password">Senha</label>
              <input type="password" name="Password" id="password" />
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Lembrar-me
              </label>
              <a
                href="http://google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Esqueci minha senha
              </a>
                <PrimaryButton type="submit">Entrar</PrimaryButton>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
