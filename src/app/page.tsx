import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import FeaturedVehiclesSection from "@/components/sections/FeaturedVehiclesSection";
import PremiumExperienceSection from "@/components/sections/PremiumExperienceSection";
import GallerySection from "@/components/sections/GallerySection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import CEOMessageSection from "@/components/sections/CEOMessageSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <BrandStorySection />
      <FeaturedVehiclesSection />
      <PremiumExperienceSection />
      <GallerySection />
      <StatisticsSection />
      <CEOMessageSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
