import React, { useState } from "react";
import "../static/Cadastro.css";
import axios from "axios";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-southstar.onrender.com",
        {
          name,
          password,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Erro ao cadastrar: " + error.response.data.message);
    }
  };

  return (
    <>
      <body>
        <div className="main-cadastro">
          <form onSubmit={handleSubmit}>
            <div class="left-cadastro">
              <div class="card-cadastro">
                <h1>Cadastro</h1>
                <div className="textfield">
                  <label for="usuario">Usuário</label>
                  <input
                    type="text"
                    name="usuario"
                    placeholder="Usuário"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="textfield">
                  <label for="senha">Senha</label>
                  <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="terms">
                  <input type="checkbox" required />
                  <label>
                    Eu aceito os <a href="#">termos e condições</a>
                  </label>
                </div>
                <button class="button-cadastro">Cadastrar</button>
                {message && <p className="message">{message}</p>}
                <div className="login-link">
                  <p>
                    Já tem uma conta? <a href="/login">Faça login</a>
                  </p>
                </div>
                {message && <p>{message}</p>}
              </div>
            </div>
          </form>
          <div className="right-cadastro">
            <h1>Se cadastre :)<br></br> E entre para o nosso time!</h1>
          </div>
        </div>
      </body>
    </>
  );
}
