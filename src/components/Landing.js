import logo from "../images/logo/Lodge_graphic_color.svg";

function Landing() {
  return (
    <div id="landing">
      <div className="h-4/6 flex flex-col justify-center items-center py-20 bg-raisin xl:py-0">
        <div className="w-full h-screen xl:flex">
          <div className="hidden bg-white xl:block bgImageFirst w-6/12 h-screen"></div>
          <img className="xl:hidden w-4/12 max-w-2xl mx-auto mt-12 p-8 pb-16" src={logo} alt="The Lodge logo" />
          <div className="text-center items-center justify-center bg-raisin xl:w-6/12 xl:flex xl:flex-col xl:h-screen">
            <h1 className="text-white text-9xl font-extrabold xl:pt-32">Lodge</h1>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center mt-8 px-8 mx-auto max-w-xl">
              An open-source framework that provides <span className="text-cyan font-medium">realtime infrastructure</span> and </p>
            <p className="text-yellowgreen font-medium text-3xl leading-snug text-center px-8 mx-auto max-w-xl">in-transit message processing</p>
            <p className="light-text text-gray-300 text-3xl leading-snug text-center font-medium max-w-xl mx-auto px-8">
              for web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-row h-4/6 bgImageSecond justify-center items-center text-center text-white bg-cyan py-20 z-40">
        <h2 className="text-4xl font-extrabold w-6/12">Easy to Manage &amp; Deploy</h2>
        <p className="text-3xl my-10 max-w-5xl w-6/12 max-w-full px-6">
          Ekko abstracts away the complexity of working with cloud
          infrastructure by automating the deployment process.
        </p>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center text-white bg-cyan py-20 z-40">
        <h2 className="text-4xl font-extrabold">Easy to Manage &amp; Deploy</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Ekko abstracts away the complexity of working with cloud
          infrastructure by automating the deployment process.
        </p>
      </div>
      <div className="hidden xl:flex h-4/6 bgImageThird xl:flex-row xl:bgImageThird flex flex-col justify-center items-center text-center text-white bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold w-6/12">Modular and Flexible</h2>
        <p className="text-3xl my-10 max-w-5xl w-6/12 max-w-full px-6">
          Ekko Functions are serverless functions that can be customized for
          your realtime needs and reused across applications.
        </p>
      </div>
      <div className="xl:hidden flex flex-col h-4/6 justify-center items-center text-center text-white bg-yellowgreen py-20">
        <h2 className="text-4xl font-extrabold">Modular and Flexible</h2>
        <p className="text-3xl my-10 max-w-5xl">
          Ekko Functions are serverless functions that can be customized for
          your realtime needs and reused across applications.
        </p>
      </div>
    </div>
  );
}

export default Landing;