import { ourTeam } from "../../constants";

export default function OurTeam() {
  return (
    <section className="flex flex-col gap-3 mt-25">
      <h2 className="mb-10 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05]">
        El equipo
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {ourTeam.map(({ photo, name, rol }, index) => (
          <article key={index}>
            <div>
              <img
                src={photo}
                alt="Foto de ejemplo"
                className="w-full border border-line"
              />
              <h3 className="mt-4 font-display text-[1.75rem] font-medium leading-[1.05]">
                {name}
              </h3>
              <p className="text-[15px] text-muted">{rol}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
