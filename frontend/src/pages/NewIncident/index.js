import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

import "./styles.css";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const ongId = localStorage.getItem("ongId");

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastar caso. Tente novamente");
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói pra resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft color="#e02041" size={16} />
            Voltar para Home
          </Link>
        </section>
        <form>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="align-buttons">
            <Link className="button-back" to="/profile">
              Cancelar
            </Link>
            <button
              type="submit"
              className="button"
              onClick={handleNewIncident}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
