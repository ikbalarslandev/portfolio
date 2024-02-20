const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-cyan-600 text-white flex items-center justify-center">
      <p className="text-sm"> © Ikbal Arslan {year} </p>
    </footer>
  );
};

export default Footer;
