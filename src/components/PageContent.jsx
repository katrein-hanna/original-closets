/* eslint-disable react/prop-types */
export default function PageContent({
  title,
  description,
  uppercaseDesc = "",
}) {
  return (
    <section className="main-container">
      <div className="content-container items-center flex flex-col justify-center gap-5 mx-auto px-2 text-primary ">
        {title == "" ? "" : <h1>{title}</h1>}
        {description == "" ? "" : <p className="text-start ">{description}</p>}
      </div>
      <p className="uppercase text-primary/70 -mt-2 mb-8">{uppercaseDesc}</p>
    </section>
  );
}
