import Favorites from "../components/home/Favorites";
import Table from "../components/home/Table";
import Testimonial from "../components/home/Testimonial";
import Welcome from "../components/home/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Favorites />
      <Testimonial />
      <Table />
    </>
  );
}
