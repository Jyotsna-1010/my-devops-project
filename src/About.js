import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="about-data">
            <p className="intro-data"><b>MISSION</b></p>
            <h1> {name} </h1>
    </div>
    </div>
    </div>
    </wrapper>
  );
};

  const data = {
    name: "Our mission is to empower both customers and sellers by providing a seamless and enjoyable shopping experience. We strive to curate a diverse selection of [products] while maintaining the highest standards of quality and customer service.
      Thank you for choosing [Your E-commerce Website Name] – we can't wait to embark on this journey with you!",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
