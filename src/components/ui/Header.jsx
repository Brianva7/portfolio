import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const sectionScroll = () => {
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const targetScrollPosition = currentScrollPosition + windowHeight;

    scroll.scrollTo(targetScrollPosition, {
      duration: 1200,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div className="pb-5 mb-5 h-screen blurbg">
      <div className="px-3 w-full h-screen flex flex-col justify-center">
        <h1 className="mb-5">Desarrollador Full Stack</h1>
        <h2>Brian vazques</h2>
        <h3 className="mx-auto mb-5 text-center">
          Desarrollador full stack especializado en{" "}
          <span className="font-bold orangeSpan">React</span> y{" "}
          <span className="font-bold orangeSpan">JavaScript</span>. Con
          conocimientos en Typescript, Redux, Zustand, NextJS, Angular, PHP,
          Laravel, NodeJS, Express, Firebase, MongoDB, MySQL, PostgreSQL y
          testing. Busco un entorno donde aportar desde mis conocimientos y
          seguir creciendo como profesional.
        </h3>
        <div onClick={sectionScroll} className="cursor:pointer">
          <img
            src="/images/downarrow.png"
            alt="arrow down"
            className="m-auto h-12 w-24 animate-bounce cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
