import BackToTop from "../backToTop";
import { getAllPostsMeta } from "@/mdx";
import IslamicCenterPage from "./(islamic-center)";

export const metadata = {
  title: "Inzaar Educational System",
  description: "Inzaar Educational System",
  icons: {
    icon: "/images/new/logo.png",
  },
};

const IslamicCenterLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <IslamicCenterPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default IslamicCenterLayout;
