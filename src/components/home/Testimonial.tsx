export default function Review() {
  return (
    <section className="flex flex-col items-center">
      <blockquote className="mx-auto max-w-205 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium italic leading-[1.2] text-center">
        “[Reseña de un cliente habitual sobre el café y el ambiente.]”
      </blockquote>
      <figcaption className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-accent">
        [Nombre del cliente]
      </figcaption>
    </section>
  );
}
