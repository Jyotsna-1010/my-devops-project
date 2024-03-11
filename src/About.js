import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Discover a world of style and convenience right at your fingertips. At ShopSphere, we curate the latest trends and timeless classics to bring you an unparalleled shopping experience",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
