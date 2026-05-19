import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 justify-center font-sans bg-[#FFFEF5]">
      <main className="flex flex-1 w-full flex-col justify-between py-32 bg-[#FFFEF5]">
          
          <div className="flex flex-col items-center gap-8">
          <div className="flex items-center justify-center ml-42 mr-42">
            <img src="Votey.png" alt="Votey Logo" />
          </div>
          
          <h1 className="text-center text-9xl leading-10 tracking-tight font-bagel text-[#F77646] mt-6">
            Votey
          </h1>
          </div>

          <p className="text-center text-3xl leading-8 font-medium mt-22">
            To make planning feel like a holiday.
          </p>

          <img src="leaf1.png" className="absolute h-120 mt-160"/>

          <div className="flex flex-col pl-25 mt-30">
            <div className="p-6 bg-[#F7CE46] rounded-lg w-1/3">
              <h2 className="text-6xl text-center ">Travel with us</h2>
            </div>
            <p className="text-center text-2xl flex font-inter flex-row ml-65 w-2/3 mt-16">
              Join our community of travelers and discover new destinations together.
            </p>
          </div>
          
          
          <div className="relative flex flex-col items-end text-right">
          
            <img src="leaf2.png" className="absolute align-right h-120"/>
           
            <div className="p-6 bg-[#98FB82] rounded-lg w-1/3 mt-90 mr-25">
              <h2 className="text-6xl text-center">Download</h2>
            </div>

            <p className="text-center text-2xl flex font-inter flex-row mr-70 w-2/3 mt-16">
              Download our app and start planning your next adventure today! {}
              Only for Android users. iOS is coming soon...
              
            </p>
          </div>
          
          <div className="flex flex-col">
            <img src="tree.png" alt="Tree" className=" absolute h-190 w-150"/>

            <div className="p-6 bg-[#E582FB] rounded-lg w-1/3 mt-165 ml-25">
              <h2 className="text-6xl text-center ">Our Team </h2>
            </div>

             <p className="text-center text-2xl flex font-inter flex-row ml-65 w-2/3 mt-16">
              We are a team of passionate travelers dedicated to making your next adventure unforgettable.
            </p>
            
            <img src="city.png" alt="City" className="absolute h-100 mt-280"/>
          </div>

          <div className="mt-100"/>
          

        
      </main>
    </div>
  );
}
