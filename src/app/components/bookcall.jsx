import Calendlylink from "../buttons/callbutton"; // Import the CalendlyLink component

export default function Book() {
  const url = "https://calendly.com/vivek-_ou/30min";

  return (
    <div className="bg-black min-h-screen min-w-full flex items-center justify-center px-2 my-20 flex-row ">
      <div className="flex flex-row w-full max-w-6xl p-2">
        <div className="flex items-center justify-center flex-col mb-4 md:mb-0 px-20 rounded-l-3xl  bg-gradient-to-br from-purple_cal">
          <h1 className="text-4xl mb-9 font-bold bg-gradient-to-r from-homegradient to-white bg-clip-text text-transparent">
            Got anything in mind?

          </h1>
          <div className="hidden md:block">
            <h1 className="text-4xl font-bold text-blue-600/100">
              Let&apos;s do it <br></br>together!
            </h1>
          </div>
        </div>
        <div className=" bg-black opacity-40"></div>

        <div className="justify-center items-center flex w-full lg:w-1/2 sm:w-full md:justify-center md:w-full bg-white p-2 sm:p-6 rounded-r-3xl shadow-lg">
          <iframe
            src={url}
            width="100%"
            height="600px"
            frameBorder="0"
            className="rounded-t-3xl rounded-r-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
