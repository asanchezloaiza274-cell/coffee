import ExampleImg from "../img/location.PNG";
import Schedule from "../components/Reservations/Schedule";

export default function Reservations() {
  return (
    <main className="max-w-7xl mx-auto py-20 flex flex-col gap-10 px-5 md:px-0">
      <section className="flex flex-col gap-1">
        <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
          Reservas y contacto
        </span>
        <h1 className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-medium leading-[1.05]">
          Reserva tu mesa
        </h1>
      </section>

      <div
        className="flex flex-col md:flex-row gap-15
      "
      >
        <Schedule />

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col">
            <h2 className="mb-2 font-display text-[2rem] font-medium leading-[1.05] text-accent">
              Horario
            </h2>
            <p className="text-muted">Lunes a viernes · 7:00 – 19:00</p>
            <p className="text-muted">Sábados y domingos · 8:00 – 20:00</p>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 font-display text-[2rem] font-medium leading-[1.05] text-accent">Dónde estamos</h3>
            <p className="text-muted">[Calle y número, Ciudad]</p>
            <p className="text-muted">[correo@tucafe.com] · [+00 000 000 000]</p>
          </div>
          <div>
            <img src={ExampleImg} alt="Imágen de ejemplo" className="w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
