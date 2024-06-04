export const TopBar = () => {
  const sendMail = () => {
    const email = "vazquesbrian7@gmail.com";
    const subject = "Contacto desde mi portfolio";
    const body = "Hola, me gustaría contactarte por...";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const sendWhatsApp = () => {
    const phoneNumber = "+541123955749";
    const message = "Hola, me gustaría contactarte por...";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="top-0 right-0 sm:right-5 z-10 fixed flex left-0 sm:left-auto">
      <span
        className="m-auto p-5 hover:scale-110 hover:cursor-pointer transition-all flex gap-1"
        onClick={() => window.open("https://linkedin.com/in/brianva7")}
      >
        <img
          src="/images/linkedin.png"
          alt="linkedin icon"
          className="w-5 h-5 m-auto"
        />
        Linkedin
      </span>
      <span
        className="m-auto p-5 hover:scale-110 hover:cursor-pointer transition-all flex gap-1"
        onClick={sendWhatsApp}
      >
        <img
          src="/images/whatsapp.png"
          alt="whatsapp icon"
          className="w-5 h-5 m-auto"
        />
        1123955749
      </span>
      <span
        className="m-auto p-5 hover:scale-110 hover:cursor-pointer transition-all flex gap-1"
        onClick={sendMail}
      >
        <img
          src="/images/gmail.png"
          alt="gmail icon"
          className="w-5 h-5 m-auto"
        />
        Vazquesbrian7<span className="hidden sm:inline">@gmail.com</span>
      </span>
    </div>
  );
};
