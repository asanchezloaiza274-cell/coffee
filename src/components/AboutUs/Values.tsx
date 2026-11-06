import { values } from "../../constants";

export default function Values() {
  return (
    <div className="grid grid-cols-3 gap-10 mt-25">
      {values.map(({ count, title, text }, index) => (
        <article className="flex flex-col gap-2 border border-line bg-surface p-9" key={index}>
          <span className="font-semibold uppercase tracking-[0.2em] text-accent">
            {count}
          </span>
          <h3 className="my-3 font-display text-[clamp(1.625rem,2.5vw,2.125rem)] font-medium leading-[1.05]">
            {title}
          </h3>
          <p className="text-muted">{text}</p>
        </article>
      ))}
    </div>
  );
}
