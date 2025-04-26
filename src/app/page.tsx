import Header from "@/components/common/Header";
import CustomSwiper from "@/components/Landing/Categories";
import HeroSection from "@/components/Landing/HeroSection";

export default function Home() {
  
  return (
    <div className="px-2 md:px-8 py-4">
      <Header />
      <HeroSection />
      <CustomSwiper />
    </div>
  );
}
