import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* LOGO */}
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          {/* TEXT */}
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rem
            reprehenderit facilis esse maxime sint nulla quam eveniet unde,
            culpa, animi voluptatum eum fuga autem dicta distinctio. Dolorum,
            alias! Vero?
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* LINKS */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa</p>
          <p className="my-5">Et Gravida</p>
          <p className="my-5">Ullasam</p>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Hyderabad India</p>
          <p className="my-5">099191910191</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
