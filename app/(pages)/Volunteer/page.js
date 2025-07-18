import BackToTop from "@/app/backToTop";
// import TeacherPage from "./(become-a-teacher)";
import Volunteer from "./(Volunteer)";

export const metadata = {
  title: "Become a Teacher - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};
const VolunteerLayout = () => {
  return (
    <>
      <Volunteer />

      <BackToTop />
    </>
  );
};

export default VolunteerLayout;
