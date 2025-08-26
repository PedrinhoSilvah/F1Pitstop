import { useEffect, useState } from "react";

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

function Home() {
  const [corrida, setCorrida] = useState<NextRace | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [drivers, setDrivers] = useState<DriverChampionship[]>([]);
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);

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
      } catch (err) {
        setErro("Erro ao carregar dados da temporada.");
      }
    }

    carregar();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (!corrida) return null;

  const proximaCorrida = corrida.race[0];
  return (
    <div className="App">
      <Header />

      <section>
        <div className="NextGP">
          <h1 className="NextH1">PRÓXIMA CORRIDA</h1>
          <h1>GP DA {proximaCorrida?.circuit.country} </h1>
          <p className="data_race">{proximaCorrida?.schedule.race.date}</p>
        </div>
      </section>
      <div className="Container_Drivers">
        <img
          className="DriversIMG"
          src="https://f1store.formula1.com/content/ws/all/acef5fb9-16e7-45b0-97ef-fab597de1ab3__800X1290.png?w=800"
          alt=""
        />
        <img
          className="DriversIMG"
          src="https://f1store.formula1.com/content/ws/all/e6e6bb59-1560-47d0-a8dc-f7b00066afb2__800X1290.png?w=800"
          alt=""
        />
        <img
          className="DriversIMG"
          src="https://f1store.formula1.com/content/ws/all/db233ec5-2ec4-45e6-839b-8b34fe1f41f0__800X1290.png?w=800"
          alt=""
        />
        <img
          className="DriversIMG"
          src="https://f1store.formula1.com/content/ws/all/13162d73-eb0b-48b6-8276-52dda0f83ca0__800X1290.png?w=800"
          alt=""
        />
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          paddingTop: 100,
        }}
      >
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
      <section className="classification">
        <img
          className="FIMG"
          src="https://media.formula1.com/image/upload/c_lfill,w_960,h_540/q_auto/v1740000000/fom-website/campaign/support-f1/F1%20TV/TV-Onboard-Norris_KzhPfjQ_1920x1080_eDQPcX6%201.webp"
          alt=""
        />
        <div className="Container">
          <div className="classification_Drivers_Team">
            <h2 className="Name_Classification">Classificação Pilotos</h2>
            <div>
              <ul className="Class">
                {drivers.map((driver) => (
                  <li className="tes" key={driver.classificationId}>
                    <div className="txt">
                      {" "}
                      <p>{driver.position}</p> <p>{driver.driverId}</p>{" "}
                    </div>{" "}
                    <p className="pts">{driver.points} pts </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="classification_Drivers_Team">
            <h2 className="Name_Classification">Classificação Constructores</h2>
            <div>
              <ul className="Class">
                {constructors.map((team) => (
                  <li className="tes" key={team.classificationId}>
                    <div className="txt">
                      {" "}
                      <p>{team.position}</p> <p>{team.teamId}</p>{" "}
                    </div>{" "}
                    <p className="pts">{team.points} pts </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
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
            "https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/fom-website/manual/Misc/Driver%20Of%20The%20Day/2025/DOTD2025%20-%20Bortoleto.webp"
          ]}
          interval={3000}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
