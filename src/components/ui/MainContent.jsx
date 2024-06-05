import Proyect from "../proyects/Card";
import proyectsData from "../../data/seed";
export const MainContent = () => {
  return (
    <>
      <div className="mt-24 mb-12 sm:mb-24 rounded-lg w-full mx-auto">
        <h2 className="font-bold p-5 blurbg">PROYECTOS:</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 mb-12 w-full mx-auto gap-12">
        {proyectsData.map((proyect) => (
          <Proyect key={proyect.id} props={proyect} />
        ))}
      </div>
    </>
  );
};
