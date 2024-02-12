import landingAnim from "../assets/landing_anim.mp4";
import satelliteArial from "../assets/satellite_arial.jpg";
import satelliteSide from "../assets/satellite_side.jpg";
import softwareImage from "../assets/software.jpg";

export default function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center relative w-full h-[calc(100vh-5rem)]">
        <div className="absolute top-0 left-0 w-full h-full">
          <video className="object-cover h-full w-full" autoPlay loop>
            <source src={landingAnim} type="video/mp4" />
          </video>
        </div>
        <span className="block sm:max-w-fit max-w-sm sm:mx-auto mx-4 text-center sm:p-10 p-6 z-10 bg-neutral-700 bg-opacity-20 border border-neutral-500 rounded-3xl backdrop-blur">
          <span className="uppercase sm:text-4xl text-2xl font-bold py-8">
            Welcome to <br />
            <span className="uppercase text-divergent-gold font-black block py-8 sm:text-7xl text-5xl tracking-widest">
              Divergent Space
            </span>
          </span>
          <span className="block sm:text-xl text-lg">
            Elevating Business through Space Excellence and Societal Innovation
          </span>
        </span>
      </div>

      <div className="w-full sm:mt-48 mt-12" />

      <span className="max-w-screen-lg sm:mx-auto block text-center text-xl mx-6">
        We are a leading consultancy that harnesses space technology to propel
        businesses forward and initiates visionary projects to create positive
        societal impact.
      </span>

      <div className="w-full sm:mt-48 mt-12" />

      <div className="max-w-screen-lg sm:mx-auto mx-6">
        <div className="flex sm:flex-row flex-col *:flex-1 items-center">
          <div className="rounded-2xl overflow-clip">
            <img
              src={satelliteArial}
              className="hover:scale-110 transition duration-300"
            />
          </div>
          <div className="sm:px-10 sm:pt-0 pt-4">
            <h2 className="uppercase font-bold text-2xl text-divergent-gold">
              Data from above
            </h2>
            <div className="my-2 border-b-2 border-divergent-gold w-1/3" />
            <p>
              Satellite data unleashes a world of excitement, empowering us with
              real-time insights crucial for everything from predicting storms
              and managing disasters to revolutionizing agriculture and urban
              planning.
            </p>
          </div>
        </div>

        <div className="w-full sm:mt-24 mt-6" />

        <div className="flex sm:flex-row flex-col-reverse *:flex-1 items-center">
          <div className="sm:px-10 sm:pt-0 pt-4">
            <h2 className="uppercase font-bold text-2xl text-divergent-gold">
              Fuelling progress
            </h2>
            <div className="my-2 border-b-2 border-divergent-gold w-1/3" />
            <p>
              These orbiting eyes in the sky provide a dynamic perspective,
              fueling scientific breakthroughs and transforming how we
              understand and interact with our planet.
            </p>
          </div>
          <div className="rounded-2xl overflow-clip">
            <img
              src={satelliteSide}
              className="hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-48 mt-12" />

      <div className="max-w-screen-lg sm:mx-auto mx-6">
        <h2 className="uppercase text-center mb-4 font-bold text-2xl text-divergent-gold">
          A sneak peak into how we work
        </h2>
        <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />
        <div className="w-full mt-4" />

        <div className="rounded-md overflow-clip">
          <img src={softwareImage} />
        </div>
      </div>
    </>
  );
}
