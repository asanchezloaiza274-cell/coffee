import OurHistory from "../components/AboutUs/OurHistory";
import OurTeam from "../components/AboutUs/OurTeam";
import Values from "../components/AboutUs/Values";

export default function AboutUs() {
    return (

        <main className="max-w-7xl mx-auto px-5 md:px-0">
            <OurHistory />
            <Values />
            <OurTeam />
        </main>
    )
}