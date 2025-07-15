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
  if (!corrida) return null

  const proximaCorrida = corrida.race[0];
  return (
    <div className="App">
      <Header />

      <section>
        <div className="NextGP">
          <h1>PRÓXIMA CORRIDA</h1>
          <h1>GP DA {proximaCorrida?.circuit.country} </h1>
          <p className="data_race">{proximaCorrida?.schedule.race.date}</p>
        </div>
        <div>
          <img
            className="F1CAR"
            src="https://motorshow.com.br/wp-content/uploads/sites/2/2023/07/si202307020345-hires-jpeg-24bit-rgb-scaled-e1688570841111.jpg"
            alt="F1_carros"
          />
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
      <section className="classification">
        <h2 className="Text_classification">Classificação da temporada</h2>
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

        <img
          className="capa_f1"
          src="https://f1store.formula1.com/content/ws/all/14875240-b5b2-4feb-a035-d15d289a147b__1600X600.gif"
          alt=""
        />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
