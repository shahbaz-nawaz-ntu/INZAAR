import BackToTop from "@/app/backToTop";
import PersonalCoursesPage from "@/components/pages/PersonalCoursesPage";

export const metadata = {
  title:
    "Instructor Personal Courses History Attempts Course - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const PersonalCoursesLayout = () => {
  return (
    <>
      <PersonalCoursesPage />
      <BackToTop />
    </>
  );
};

export default PersonalCoursesLayout;
