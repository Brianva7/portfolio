import ImageSlider from "./ImageSlider";

const Card = (proyect) => {
  const { props } = proyect;

  let { name, images, description, url, repository, technologies } = props;

  const frontTech = technologies[0].frontend.join(", ");
  const backTech = technologies[1].backend.join(", ");
  const databaseTech = technologies[2].database.join(", ");

  return (
    <div className="sm:col-span-1 px-3 py-5 rounded-lg blurbg ">
      <ImageSlider images={images} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Front: {frontTech}</p>
      <p>Back: {backTech}</p>
      <p>Base de datos: {databaseTech}</p>
      <div className="flex gap-3 justify-center">
        <a href={repository} target="_blank" rel="noopener noreferrer">
          <span className="hover:text-orange-400">Ir a Github</span>
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span className="hover:text-orange-400">Ir a la web</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
