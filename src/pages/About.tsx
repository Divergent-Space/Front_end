import satelliteSide from "../assets/satellite_side.jpg";

import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpeg";
import coo from "../assets/coo.jpg";
import divergent from "../assets/divergent.svg";
import profit from "../assets/profit.svg";

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg sm:mx-auto mx-6">
      <div className="w-full sm:mt-24 mt-6" />

      <div className="sm:px-10 text-center">
        <h2 className="uppercase font-bold text-2xl text-divergent-gold">
          What we do
        </h2>
        <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />
        <p className="sm:text-xl text-md">
          Divergent Space is a pioneering consultancy dedicated to harnessing
          space technology's transformative potential for business growth and
          positive societal change. Our mission revolves around seamlessly
          integrating cutting-edge space solutions with visionary initiatives,
          creating a unique synergy between profit-driven success and societal
          impact. Specializing in strategic space consultancy, precise
          implementation plans, and innovative projects, we are architects of a
          transformative future. Our approach emphasizes divergent thinking,
          unlocking creativity for space-driven business success, with a proven
          track record of delivering tangible results in both profit and
          societal transformation. Focused on impact, collaboration, and
          excellence, Divergent Space invites individuals to engage by joining
          STEM committees or supporting initiatives contributing to real-world
          positive change. Our impact areas span space-powered business growth,
          innovative projects addressing societal challenges, and excellence in
          turning dreams into reality through space technology. Join us at
          Divergent Space, where the convergence of space and societal
          transformation shapes a future that is profitable and purposeful.
        </p>
      </div>

      <div className="w-full sm:mt-24 mt-6" />

      <div className="rounded-2xl overflow-clip max-h-60">
        <img src={satelliteSide} className="object-cover w-full h-full" />
      </div>

      <div className="w-full sm:mt-24 mt-12" />

      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="uppercase font-bold text-2xl text-divergent-gold">
          Who we are
        </h2>
        <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />
      </div>

      <div className="w-full sm:mt-6 mt-10" />

      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-5 items-center">
          <div className="col-span-2 rounded-2xl overflow-clip aspect-[3/4]">
            <img
              src={ceo}
              className="hover:scale-110 w-full h-full object-cover transition duration-300"
            />
          </div>
          <div className="col-span-3 sm:px-10 pl-4">
            <h3 className="uppercase italic text-md text-divergent-gold">
              CEO
            </h3>
            <h2 className="uppercase font-bold text-2xl text-divergent-gold">
              Mr. Albert Mbogo
            </h2>
            <div className="my-2 border-b-2 border-divergent-gold w-1/3" />
            <p>An entrepreneur, astrophysicist and our proud founder.</p>
          </div>
        </div>

        <div className="w-full sm:mt-6 mt-10" />

        <div className="grid grid-cols-5 items-center">
          <div className="col-span-3 sm:px-10 pr-4">
            <h3 className="uppercase italic text-md text-divergent-gold">
              COO
            </h3>
            <h2 className="uppercase font-bold text-2xl text-divergent-gold">
              Mr. Joshua Oleko
            </h2>
            <div className="my-2 border-b-2 border-divergent-gold w-1/3" />
            <p>
              A Biosystems engineer who has had international experience in food
              production and sustainable agriculture.
            </p>
          </div>
          <div className="col-span-2 rounded-2xl overflow-clip aspect-[3/4]">
            <img
              src={coo}
              className="hover:scale-110 object-cover w-full h-full transition duration-300"
            />
          </div>
        </div>

        <div className="w-full sm:mt-6 mt-10" />

        <div className="grid grid-cols-5 items-center">
          <div className="col-span-2 rounded-2xl overflow-clip aspect-[3/4]">
            <img
              src={cto}
              className="hover:scale-110 object-cover w-full h-full transition duration-300"
            />
          </div>
          <div className="col-span-3 sm:px-10 pl-4">
            <h3 className="uppercase italic text-md text-divergent-gold">
              CTO
            </h3>
            <h2 className="uppercase font-bold text-2xl text-divergent-gold">
              Ms. Evelyn
            </h2>
            <div className="my-2 border-b-2 border-divergent-gold w-1/3" />
            <p>
              A data scientist with a wealth of experience in statistics and
              software engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-24 mt-12" />

      <h1 className="uppercase font-bold text-2xl text-divergent-gold text-center">
        Our Approach
      </h1>
      <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />

      <div className="w-full mt-6" />

      <div className="max-w-fit sm:mx-auto mx-4">
        <ol className="list-disc *:my-2">
          <li>
            Divergent Space Consultancy: Craft business strategies powered by
            space technology.
          </li>
          <li>
            Implementation Expertise: Seamlessly execute strategies for
            tangible, real-world impact.
          </li>
          <li>
            Innovative Initiatives: Turning dreams into reality through space
            technology.
          </li>
        </ol>
      </div>

      <div className="w-full sm:mt-24 mt-12" />

      <h1 className="uppercase font-bold text-2xl text-divergent-gold text-center">
        Why Choose Us
      </h1>
      <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />

      <div className="w-full mt-6" />

      <div className="flex w-full justify-between">
        <div className="flex flex-col items-center text-center py-4">
          <img src={divergent} className="w-20 h-20" />
          <h2 className="text-xl font-medium my-2">Divergent Thinking</h2>
          <span>Unleashing creativity for space-driven business success</span>
        </div>
        <div className="flex flex-col items-center text-center py-4">
          <img src={profit} className="w-20 h-20" />
          <h2 className="text-xl font-medium my-2">Proven Impact</h2>
          <span>
            Tangible results in both profit and societal transformation
          </span>
        </div>
      </div>

      <div className="w-full sm:mt-24 mt-12" />

      <div className="flex sm:flex-row flex-col">
        <div className="basis-2/5">
          <h1 className="uppercase font-bold text-2xl text-divergent-gold text-center">
            Get Involved
          </h1>
          <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />
          <div className="w-full mt-6" />
          <h2 className="text-md font-bold text-divergent-gold">
            Join a Committee
          </h2>
          <span>
            Contribute to impactful projects through our STEM committees
          </span>
          <div className="w-full mt-4" />
          <h2 className="text-md font-bold text-divergent-gold">
            Support Our Projects
          </h2>
          <span>
            Be part of the change and support initiatives that transform lives.
          </span>
        </div>

        <div className="sm:block hidden border border-r-2 border-divergent-gold mx-4" />

        <div className="basis-3/5 mt-12 sm:mt-0">
          <h1 className="uppercase font-bold text-2xl text-divergent-gold text-center">
            Impact Areas
          </h1>
          <div className="my-2 mx-auto border-b-2 border-divergent-gold w-1/3" />

          <div className="w-full mt-6" />

          <div className="">
            <span className="font-bold text-divergent-gold">
              Space-Powered Business
            </span>
            : Competitive advantage and success for our clients.
            <div className="my-2" />
            <span className="font-bold text-divergent-gold">
              Societal Development
            </span>
            : Innovative projects addressing real-world challenges.
            <div className="my-2" />
            <span className="font-bold text-divergent-gold">
              Innovation Excellence
            </span>
            : Turning dreams into reality through space technology.
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-24 mt-12" />

      <div className="sm:px-10 px-4 text-center">
        <p className="text-xl">
          Join us at Divergent Space Strategies, where space and societal
          transformation converge for a future that's both profitable and
          purposeful.
        </p>
      </div>
    </div>
  );
}
