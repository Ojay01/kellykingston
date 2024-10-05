import Intro from "@/components/homepage/intro.section";
import ServicesSection from "@/components/homepage/services.section";
// import RecentWorksSection from "@/components/homepage/works.section";

export default function Home() {
  return (
    <main>
      <Intro />
      <ServicesSection />
      {/* <RecentWorksSection /> */}
    </main>
  );
}
