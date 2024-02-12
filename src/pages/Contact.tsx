import radioTower from "../assets/radio-tower.jpg";

export default function ContactPage() {
  return (
    <div className="sm:mx-0 mx-4">
      <div className="sm:block hidden absolute top-0 left-0">
        <img src={radioTower} className="object-cover grayscale" />
      </div>
      <div className="pt-8 sm:pb-8 sm:border border-gray-700 rounded-3xl sm:px-8 mx-auto w-full h-full sm:max-w-screen-sm sm:bg-gray-900 sm:backdrop-blur relative sm:top-10 sm:bg-opacity-20">
        <h1 className="text-5xl font-bold text-divergent-gold z-10">
          Hey! Feel free to reach out with any inquiries.
        </h1>
        <h2 className="text-md">
          Use the form below to send us a message and we will get back to you
          soon!
        </h2>

        <div className="w-full sm:mt-12 mt-8" />

        <form
          action=""
          method="post"
          className="flex flex-col *:w-full sm:px-10 px-4"
        >
          <label className="border rounded-lg w-fit p-2 relative flex my-2">
            Name
            <input type="text" name="name" className="bg-transparent w-full" />
          </label>
          <label className="border rounded-lg w-fit p-2 flex my-2">
            Email
            <input
              type="email"
              name="email"
              className="bg-transparent w-full"
            />
          </label>
          <label className="border rounded-lg focus:border-divergent-gold w-fit p-2 my-2 max-h-60">
            Message
            <textarea name="name" className="bg-transparent w-full h-full" />
          </label>
          <button className="uppercase rounded-full bg-divergent-gold text-divergent-blue py-2 px-10 mt-4 ml-auto max-w-fit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
