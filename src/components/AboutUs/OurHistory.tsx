import ExampleImage from "../../img/example.PNG";

export default function OurHistory() {
  return (
    <section className="flex items-center gap-10 mt-20">
      <div className="flex flex-col gap-5 w-full">
        <span className="uppercase font-semibold tracking-[0.2em] text-accent">
          Nuestra Historia
        </span>
        <h1 className="font-display text-[clamp(3rem,6vw,4.75rem)] font-medium leading-[1.05]">
          Una tostaduría <br /> pequeña,{" "}
          <em className="text-accent">
            hecha a <br /> mano
          </em>
        </h1>
        <p className="text-muted">
          [Escribe 2–3 líneas: quién abrió el local, cuándo y por qué. <br />
          Cuenta cómo eliges el café y cómo tratas a los clientes.]
        </p>
      </div>
      <div className="w-full">
        <img src={ExampleImage} alt="Imágen de ejemplo" className="w-full" />
      </div>
    </section>
  );
}
