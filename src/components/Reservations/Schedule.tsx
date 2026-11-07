export default function Schedule() {
  return (
    <section className="flex gap-10 w-77/100">
      <form className="flex flex-col gap-5 bg-surface p-6 border border-line">
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <label htmlFor="fullname">Nombre</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="h-10 w-full min-w-0 rounded-xs border border-[#7A6A5B] bg-bg px-4 text-base text-ink scheme-dark placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <label htmlFor="emailortel">Correo o teléfono</label>
          <input
            type="text"
            id="emailortel"
            name="emailortel"
            className="h-10 w-full min-w-0 rounded-xs border border-[#7A6A5B] bg-bg px-4 text-base text-ink scheme-dark placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <label htmlFor="date">Fecha</label>
            <input
              type="date"
              id="date"
              name="date"
              className="h-10 w-full min-w-0 rounded-xs border border-[#7A6A5B] bg-bg px-4 text-base text-ink scheme-dark placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <label htmlFor="date">Hora</label>
            <input
              type="time"
              id="date"
              name="date"
              className="h-10 w-full min-w-0 rounded-xs border border-[#7A6A5B] bg-bg px-4 text-base text-ink scheme-dark placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              value="10:00"
            />
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <label htmlFor="count">Personas</label>
            <input
              type="number"
              id="count"
              name="count"
              className="h-10 w-full min-w-0 rounded-xs border border-[#7A6A5B] bg-bg px-4 text-base text-ink scheme-dark placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              defaultValue={1}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
