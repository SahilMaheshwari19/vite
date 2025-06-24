import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import { HashLink } from "react-router-hash-link";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-50 py-10 md:h-full md:pb-0">
      {/* IMG AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADIINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              ullam itaque id consequuntur quo dolores est assumenda suscipit,
              incidunt magnam. Incidunt necessitatibus reiciendis debitis libero
              corporis vero, deleniti est repellendus.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <HashLink
              className="text-sm font-bold text-red-400 underline hover:text-amber-300"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              to={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </HashLink>
          </div>
        </div>
        {/* IMGAGE */}
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="sponsor-red-Bull" src={SponsorRedBull} />
              <img alt="sponsor-fortune" src={SponsorFortune} />
              <img alt="sponsor-forbes" src={SponsorForbes} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
