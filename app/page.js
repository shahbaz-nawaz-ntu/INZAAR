import BackToTop from "./backToTop";
import HomePage from "../app/HomePage/page";
import LandingAuthCheck from "./LandingAuthCheck";

export const metadata = {
  title: "Inzaar Educational System",
  description: "Inzaar Educational System",
  icons: {
    icon: "/images/new/logo.png",
  },
};

export default function Home() {
  return (
    <LandingAuthCheck>
      <main>
        <HomePage />

        <BackToTop />
      </main>
    </LandingAuthCheck>
  );
}
