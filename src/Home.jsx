import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const iniciarChat = () => {
    if (nome.trim() !== "") {
      // Você pode passar o nome por estado ou contexto, aqui vai pela URL como exemplo
      navigate(`/chat?nome=${encodeURIComponent(nome)}`);
    } else {
      alert("Por favor, digite seu nome.");
    }
  };

  return (
    <div className="home-box">
      <h1>💬 Atendimento Online</h1>
      <p>Precisa de ajuda? Fale com um de nossos atendentes.</p>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          padding: "8px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={iniciarChat}
        style={{
          padding: "8px 12px",
          backgroundColor: "#1c6be2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Conversar com Atendente
      </button>
    </div>
  );
}
