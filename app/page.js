import BackToTop from "./backToTop";
import HomePage from "../app/HomePage/page";

export const metadata = {
  title: "Inzaar Educational System",
  description: "Inzaar Educational System",
  icons: {
    icon: "/images/new/logo.png",
  },
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
