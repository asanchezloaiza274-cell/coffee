import { NavLink } from "react-router-dom";
import ExampleImg from "../../img/example.PNG";

export default function Welcome() {
  const cards = [
    {
      title: "Origen",
      text: "Café de pequeños productores, trazable y de temporada.",
    },
    {
      title: "Horno propio",
      text: "Pan, croissants y tartas cada mañana.",
    },
    {
      title: "Sin prisa",
      text: "Un lugar cálido para trabajar o conversar.",
    },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row items-center gap-10 py-20 max-w-7xl mx-auto px-5 md:px-0">
        <div className="flex flex-col gap-7 w-full">
          <span className="tracking-[0.2em] font-semibold text-accent md:text-sm">
            TOSTADURÍA Y CAFETERÍA
          </span>
          <h1 className="font-display text-[clamp(4.8rem,14vw,12rem)] md:text-[clamp(3.75rem,8vw,6rem)] font-medium leading-[1.05]">
            El café,
            <br />
            <em className="italic text-accent">con calma.</em>
          </h1>
          <p className="max-w-115 text-[17px] text-muted md:text-[19px]">
            Granos de origen tostados cada semana, repostería casera y una mesa
            esperándote.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <NavLink
              to="/reservations"
              className={`bg-accent text-black font-bold py-3 px-5 md:text-sm w-full md:w-fit text-center`}
            >
              Reservar mesa
            </NavLink>
            <NavLink
              to="/menu"
              className={`bg-transparent text-accent font-semibold py-3 px-5 md:text-sm border-2 border-line w-full md:w-fit text-center`}
            >
              Ver el menú
            </NavLink>
          </div>
        </div>

        <div className="w-full">
          <img
            src={ExampleImg}
            alt="Imágen de bienvenida"
            className="w-full h-full"
          />
        </div>
      </section>

      <section className="bg-surface px-5 md:px-0">
        <div className="flex flex-col md:flex-row justify-between md:items-center py-12 max-w-7xl mx-auto gap-6 md:gap-0">
          {cards.map(({ title, text }) => (
            <div className="flex flex-col" key={title}>
              <h3 className="font-display text-[clamp(1.9rem,2.5vw,2.125rem)] md:text-[clamp(1.625rem,2.5vw,2.125rem)] font-medium leading-7 md:leading-[1.05] text-accent mb-2">
                {title}
              </h3>
              <p className="text-muted md:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
