import AllProducts from "@/components/AllProducts";
import Carosuel from "@/components/Carosuel";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="w-full bg-offWhite text-charcoalGray mt-5 ">
      <HeroSection />
      <Carosuel />
      <AllProducts />
      {/* <Testimonials /> */}
      <FAQ />
    </div>
  );
}
