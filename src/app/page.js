import Image from "next/image";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <div className="bg-base-300 mt-16 w-10/12 mx-auto">
      <HeroSlider />
    </div>
  );
}
