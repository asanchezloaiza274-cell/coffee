import { items } from "../constants";

export default function Menu() {
  return (
    <section className="flex flex-col py-16 max-w-7xl mx-auto">
      <div className="flex flex-col gap-1 text-center">
        <span className="uppercase font-semibold tracking-[0.2em] text-accent text-sm">
          La carta
        </span>
        <h1 className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-medium leading-[1.05]">
          Menú
        </h1>
        <p className="mt-4 text-muted text-sm">
          Todo se prepara al momento. Pregunta por opciones sin gluten o
          veganas.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-20 mt-17">
        {items.map(({ title, items }) => (
          <div key={title}>
            <h2 className="mb-4 font-display text-[clamp(1.20rem,3vw,2.75rem)] font-medium leading-[1.05] text-accent">
              {title}
            </h2>
            {items.map(({ name, description, price }) => (
              <div
                className="flex flex-col border-b border-line pb-4 mb-4"
                key={name}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-2xl font-medium leading-[1.05]">
                    {name}
                  </h3>
                  <span className="font-semibold uppercase tracking-[0.2em] text-accent text-sm">
                    ${price}
                  </span>
                </div>
                <p className="text-muted text-sm">{description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-surface text-center border border-line py-9 text-muted mt-17">
        <p>
          Los precios incluyen impuestos. Avísanos de cualquier alergia o
          intolerancia.
        </p>
      </div>
    </section>
  );
}
