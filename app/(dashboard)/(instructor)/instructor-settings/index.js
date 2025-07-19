import BackToTop from "@/app/backToTop";
import SettingPage from "@/components/pages/SettingPage";

export const metadata = {
  title: "Instructor Settings - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const SettingLayout = () => {
  return (
    <>
      <SettingPage />

      <BackToTop />
    </>
  );
};

export default SettingLayout;
