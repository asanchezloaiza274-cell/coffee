import { Link } from "react-router-dom";
import ExampleImage from "../../img/example.PNG";

const favorites = [
  {
    image: ExampleImage,
    title: "Flat white",
    text: "Doble espresso, leche sedosa",
    price: "0.00",
  },
  {
    image: ExampleImage,
    title: "Croissant",
    text: "Mantequilla, horneado al alba",
    price: "0.00",
  },
  {
    image: ExampleImage,
    title: "Cold brew",
    text: "Infusión en frío de 18 horas",
    price: "0.00",
  },
];

export default function Favorites() {
  return (
    <section className="flex flex-col gap-6 md:gap-10 py-27 max-w-7xl mx-auto px-5 md:px-0">
      <div className="flex flex-col gap-10 md:gap-1">
        <div className="flex justify-between">
          <span className="uppercase font-semibold tracking-[0.2em] text-accent text-xs">
            Selección
          </span>
          <Link
            to="/menu"
            className="uppercase text-xs border-b border-accent pb-0.5 font-semibold  tracking-[0.2em] text-accent transition hover:brightness-125"
          >
            Ver carta completa
          </Link>
        </div>
        <h2 className=" font-display text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] ">
          Favoritos de la casa
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {favorites.map(({ image, title, text, price }, index) => (
          <article
            key={index}
            className="flex flex-col pb-4  border-b border-line"
          >
            <img src={image} alt="" className="w-full h-full" />
            <div className="flex items-center justify-between pt-4 ">
              <p className="font-display text-[1.75rem] font-medium leading-[1.05]">
                {title}
              </p>
              <p className="font-semibold uppercase tracking-[0.2em] text-accent">
                {price}
              </p>
            </div>
            <p className="text-muted">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
