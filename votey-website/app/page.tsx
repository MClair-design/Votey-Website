import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 justify-center font-sans bg-[#FFFEF5]">
      <main className="flex flex-1 w-full flex-col justify-between py-32 bg-[#FFFEF5]">
          
          <div className="flex flex-col items-center gap-8">
          <div className="flex items-center justify-center pl-15 pr-15 lg:pl-42 lg:pr-42">
            <img src="Votey.png" alt="Votey Logo"/>
          </div>
          
          <h1 className="text-center text-9xl leading-10 tracking-tight font-bagel text-[#F77646] pt-6">
            Votey
          </h1>
          </div>
 
          <p className="text-center text-3xl leading-8 font-medium pt-22 px-10">
           Make travel planning feel like a holiday.
          </p>

          <img src="leaf1.png" className="absolute h-50 xl:h-120 mt-160"/>

          <div className="flex flex-col pl-17 xl:pl-25 mt-30">
            <div className="p-6 bg-[#F7CE46] rounded-lg w-1/3">
              <h2 className="text-2xl text-center lg:text-6xl">Travel with us</h2>
            </div>
            <p className="text-center text-xl lg:text-2xl font-inter lg:ml-45 w-2/3 mt-16 leading-12">
              Join our community of travelers and discover new destinations together.
              <br/>
              <span className="font-semibold">Create</span> a trip, <span className="font-semibold">invite</span> your friends, and let the <span className="font-semibold">voting</span> begin!
              <br/>
              With Votey, you can easily plan your <span className="font-semibold">next adventure</span> with your friends and family.
            </p>
          </div>
          
          
          <div className="relative flex flex-col items-end text-right">
          
            <img src="leaf2.png" className="absolute align-right h-50 xl:h-120"/>
           
            <div className="p-6 bg-[#98FB82] rounded-lg w-1/3 mt-40 mr-5 xl:mt-90 xl:mr-25">
              <h2 className="text-xl text-center lg:text-6xl">Download</h2>
            </div>

            <p className="text-center text-xl lg:text-2xl font-inter mr-15 lg:mr-80 w-2/3 pt-16 leading-12">         
            Download our app and start planning your next adventure today!
              <br />
              Only for <span className="font-semibold">Android</span> users. iOS is coming soon...
            </p>

          </div>
          
          <div className="flex flex-col">
            <img src="tree.png" alt="Tree" className=" absolute h-100 xl:h-190 w-60 xl:w-150"/>

            <div className="p-6 bg-[#E582FB] rounded-lg w-1/3 ml-5 mt-80 xl:mt-165 xl:ml-25">
              <h2 className="text-xl text-center lg:text-6xl">Our Team </h2>
            </div>

             <p className="text-center text-xl lg:text-2xl font-inter ml-20 lg:ml-65 w-2/3 mt-16 leading-10">
              We are a team of passionate travelers dedicated to making your next adventure unforgettable. 
              This App was created as part of a project for our last semester at the University of Applied Sciences St. Pölten.
              <br/>
              <span className="font-semibold">We hope you enjoy using Votey as much as we enjoyed creating it!</span>
            </p>
          </div>

          <div className="pt-40"/>
          

        
      </main>
    </div>
  );
}
