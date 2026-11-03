import Favorites from "../components/home/Favorites";
import Review from "../components/home/Review";
import Welcome from "../components/home/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <Favorites />
      <Review />
    </>
  );
}
