import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Performances } from "@/components/Performances";
import { Biography } from "@/components/Biography";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { Videos } from "@/components/Videos";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Testimonials />
      <FeaturedVideo />
      <About />
      <Performances />
      <Biography />
      <Clients />
      <Videos />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
