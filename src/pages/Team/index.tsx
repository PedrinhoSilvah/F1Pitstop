import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getEquipes } from "../../services/F1Api";


const Team = () => {
  return (
    <>
      <Header />
        <section>
            <img src="https://img.asmedia.epimg.net/resizer/v2/2AHY4FP6NFHXXNN7RC6OCO7BU4.jpg?auth=9c2f8ea5bdbfe640c8fef82011f6a92d407cb85d2c644710344becba26443bba&width=360&height=203&focal=1882%2C143" alt="" />
        </section>
      <Footer />
    </>
  );
};

export default Team;
