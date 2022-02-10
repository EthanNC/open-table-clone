import { ReactNode } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import SearchBar from "@/components/molecules/search-bar";
import Dropdown from "@/components/atoms/select";
// interface HeroProps {
//   children: ReactNode;
// }

function Hero({}) {
  return (
    <section className="relative h-[25vh] md:h-[45vh] bg-slate-800">
      <div className={styles.image}>
        <Image
          src="/assets/hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="hero"
          placeholder="blur"
          blurDataURL="/assets/hero.jpg"
          quality={50}
        />
      </div>

      <div className="absolute z-10 left-0 right-0 top-[45%] md:top-[50%] xl:top-[40%]">
        <h1 className="mx-auto px-4 text-2xl font-bold tracking-wide text-center md:px-0 text-white md:text-3xl xl:text-5xl">
          Find your table for any occasion
        </h1>
        <SearchBar/>
      </div>
    </section>
  );
}

export default Hero;
