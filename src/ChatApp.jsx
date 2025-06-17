import { useState } from "react";
import "./App.css";

export default function ChatApp() {
  const [mensagens, setMensagens] = useState([
    { texto: "Olá! Como posso te ajudar hoje?", tipo: "received" },
  ]);
  const [entrada, setEntrada] = useState("");

  const enviarMensagem = () => {
    if (!entrada.trim()) return;
    setMensagens([...mensagens, { texto: entrada, tipo: "sent" }]);
    setEntrada("");
  };

  return (
    <div className="container">
      <div className="chat-box">
        <div className="title">
          <strong>ATENDIMENTO ON-LINE</strong>
        </div>
        <div className="messages">
          {mensagens.map((msg, i) => (
            <div key={i} className={`message ${msg.tipo}`}>
              <p>{msg.texto}</p>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          />
          <button onClick={enviarMensagem}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
