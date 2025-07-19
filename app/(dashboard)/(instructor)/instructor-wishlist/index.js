import BackToTop from "@/app/backToTop";
import WishlistPage from "@/components/pages/WishlistPage";

export const metadata = {
  title:
    "Instructor Wishlist Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const WishlistLayout = () => {
  return (
    <>
      <WishlistPage />
      <BackToTop />
    </>
  );
};

export default WishlistLayout;
