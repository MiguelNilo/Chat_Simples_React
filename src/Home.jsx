import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-box">
      <h1>💬 Atendimento Online</h1>
      <p>Precisa de ajuda? Fale com um de nossos atendentes.</p>
      <Link to="/chat">Conversar com Atendente</Link>
    </div>
  );
}
