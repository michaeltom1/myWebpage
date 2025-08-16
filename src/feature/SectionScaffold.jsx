
function SectionScaffold({
  Icon,
  colouredText = "Red",
  title = "",
  children,
  sectionId,
}) {
  return (
    <section id={sectionId} className="mx-auto w-4/5 py-16">
      <div className={`flex justify-center font-extrabold`}>
        <h2 className="text-4xl flex items-center gap-4 pb-3 ">
          {Icon && <Icon className="text-accent" />}
          <span>
            {title}&thinsp;
            {colouredText && (
              <span className="text-accent"> {colouredText}</span>
            )}
          </span>
        </h2>
      </div>
      <hr className={`border-accent`} />
      {children}
    </section>
  );
}

export default SectionScaffold;
