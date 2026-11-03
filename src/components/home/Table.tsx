import { Link } from "react-router-dom";

export default function Table() {
  return (
    <section className="flex flex-col gap-2 border border-line bg-surface  items-center py-15 mt-30">
      <h2 className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.05]">
        Tu mesa te espera
      </h2>
      <p className="mb-8 mt-4 text-muted">Reserva en menos de un minuto.</p>
      <Link
        to="/reservations"
        className="bg-accent text-black font-bold py-3 px-5"
      >
        Reservar mesa
      </Link>
    </section>
  );
}