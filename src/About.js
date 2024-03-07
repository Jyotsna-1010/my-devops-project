import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

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
