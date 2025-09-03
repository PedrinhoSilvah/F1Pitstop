import React, { useEffect, useState } from "react";

import {
  getProximaCorrida,
  NextRace,
  getDriversChampionship,
  DriverChampionship,
  getConstructorsChampionship,
  ConstructorStanding,
} from "../../services/F1Api";
import "../../index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AutoSlider from "../../Slides/Slides";
import FrontLando from "../../assets/imgs/LANDO.jpg";
import FrontMax from "../../assets/imgs/MAX.png";
import FrontRussel from "../../assets/imgs/RUSSEL.jpg";
import FrontPiastri from "../../assets/imgs/PIASTRI.jpg";
import styled, { keyframes } from "styled-components";

// Animação: carro atravessa a tela da direita para a esquerda
const drive = keyframes`
  0% { transform: translateX(150%); }
  100% { transform: translateX(-150%); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #000;
`;

const Car = styled.div`
  font-size: 3rem;
  animation: ${drive} 4s linear infinite;
`;

function Home() {
  const [corrida, setCorrida] = useState<NextRace | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [drivers, setDrivers] = useState<DriverChampionship[]>([]);
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<"drivers" | "constructors">(
    "drivers"
  );

  useEffect(() => {
    async function carregar() {
      try {
        const [dadosCorrida, dadosDrivers, dadosConstructors] =
          await Promise.all([
            getProximaCorrida(),
            getDriversChampionship(),
            getConstructorsChampionship(),
          ]);

        setCorrida(dadosCorrida);
        setDrivers(dadosDrivers);
        setConstructors(dadosConstructors);
        setLoading(false); // esconde loader
      } catch (err) {
        setErro("Erro ao carregar dados da temporada.");
        setLoading(false);
      }
    }

    carregar();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (loading)
    return (
      <LoaderWrapper>
        <Car>🏎️</Car>
      </LoaderWrapper>
    );

  const proximaCorrida = corrida?.race[0];
  return (
    <div className="App">
      <Header />

      <section>
        {/* Próxima Corrida */}
        <div className="NextGP">
          <h1 className="NextH1">PRÓXIMA CORRIDA</h1>
          <h1>GP DA {proximaCorrida?.circuit.country} </h1>
          <p className="data_race">{proximaCorrida?.schedule.race.date}</p>
        </div>
      </section>
      {/* Pilotos em destaque */}
      <div className="Container_Drivers">
        <img className="DriversIMG" src={FrontLando} alt="Imagem_PIloto" />
        <img className="DriversIMG" src={FrontMax} alt="Imagem_PIloto" />
        <img className="DriversIMG" src={FrontRussel} alt="Imagem_PIloto" />
        <img className="DriversIMG" src={FrontPiastri} alt="Imagem_PIloto" />
      </div>
      {/* Slider */}
      <div className="Top">
        <AutoSlider
          images={[
            "https://media.formula1.com/image/upload/t_16by9North/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202523504.webp",
            "https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_2/2202231035.webp",
            "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202499870.webp",
            "https://media.formula1.com/image/upload/t_16by9North/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_2/2202231034.webp",
            "https://media.formula1.com/image/upload/t_16by9South/c_lfill,w_3392/q_auto/v1740000000/trackside-images/2025/Formula_1_Testing_in_Bahrain___Day_3/2202532072.webp",
          ]}
          interval={3000}
        />
      </div>
      <h2 className="Classification_H2">Classificação Drivers & Teams</h2>

      <section className="classification mobile-only">
        <img
          className="FIMG"
          src="https://media.formula1.com/image/upload/c_lfill,w_960,h_540/q_auto/v1740000000/fom-website/campaign/support-f1/F1%20TV/TV-Onboard-Norris_KzhPfjQ_1920x1080_eDQPcX6%201.webp"
          alt=""
        />

        <div className="Container">
          {/* Botões mobile */}
          <div className="mobile-buttons">
            <button
              className={activeTab === "drivers" ? "active" : ""}
              onClick={() => setActiveTab("drivers")}
            >
              Drivers
            </button>
            <button
              className={activeTab === "constructors" ? "active" : ""}
              onClick={() => setActiveTab("constructors")}
            >
              Teams
            </button>
          </div>
          {/* Classificação Mobile */}
          <div
            className={`classification_Drivers_Team drivers ${
              activeTab === "drivers" ? "show" : "hide"
            }`}
          >
            <h2 className="Name_Classification">Classificação Pilotos</h2>
            <ul className="Class">
              {drivers.map((driver) => (
                <li className="tes" key={driver.classificationId}>
                  <div className="txt">
                    <p>{driver.position}</p>
                    <p>{driver.driverId}</p>
                  </div>
                  <p className="pts">{driver.points} pts</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`classification_Drivers_Team constructors ${
              activeTab === "constructors" ? "show" : "hide"
            }`}
          >
            <h2 className="Name_Classification">Classificação Construtores</h2>
            <ul className="Class">
              {constructors.map((team) => (
                <li className="tes" key={team.classificationId}>
                  <div className="txt">
                    <p>{team.position}</p>
                    <p>{team.teamId}</p>
                  </div>
                  <p className="pts">{team.points} pts</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Slider */}
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <AutoSlider
          images={[
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Hamilton.webp",
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Verstappen.webp",
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Piastri.webp",
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Leclerc.webp",
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Norris.webp",
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Bortoleto.webp",
          ]}
          interval={3000}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
