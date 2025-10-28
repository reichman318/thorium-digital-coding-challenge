import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* announcement bar */}
      <div className="bg-announcement text-center py-3 shadow-[0px_0px_54px_0px_rgba(0,0,0,0.75)] relative">
        <div className="container">
          <p className="opacity-80">This is an example of a notification message. It can be used to promote a specific campaign, etc.</p>
        </div>
      </div>

      {/* header */}
      <header className="md:py-13 py-8 relative">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <a href="#">
              <Image src="/images/logo.svg" alt="Magnacare" width={234} height={60} className="md:w-[234px] w-[160px] h-auto" />
            </a>
            {/* menu button */}
            <button className="cursor-pointer">
              <Image src="/images/icon-humburger.svg" alt="Menu" width={28} height={28} className="md:w-7 w-6 h-auto" />
            </button>
          </div>
        </div>
      </header>

      {/* gradient background */}
      <div className="bg-gradient absolute top-0 inset-x-0 w-full z-[-1] rounded-full" />

      {/* content */}
      <div className="relative overflow-hidden">
        <div className="container relative">
          <h2 className="font-heading text-center text-xl md:text-2xl lg:text-4xl tracking-[0.38em] uppercase">Choose your</h2>
          <div className="relative mt-8 lg:mt-13 w-10/12 mx-auto">
            <Image src="/images/access.svg" alt="access" width={1400} height={400} className="w-full h-auto" />
            <span className="h-8 md:h-14 lg:h-20 w-[70%] mix-blend-overlay block absolute top-[38%] -translate-y-1/2 -left-[20%] md:-left-[8%] bg-primary"></span>
            <span className="h-8 md:h-14 lg:h-20 w-[80%] mix-blend-overlay block absolute bottom-[22%] -translate-y-1/2 -right-[30%] bg-primary"></span>
          </div>
          <div className="mt-8 text-center md:text-left md:mt-18 xl:text-[30px] lg:text-2xl md:text-lg text-base tracking-[0.015em] xl:max-w-[820px] lg:max-w-[600px] max-w-[400px] ml-auto pb-5">
            <p>
              Expand your provider network <span className="font-serif">anywhere</span> in the country. Or lease just the network locations you need. With MagnaCare Access, <b>the choice is yours.</b>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start md:absolute inset-0">
          <Image src="/images/doctor2.png" alt="Image" width={400} height={600} className="w-1/2 md:w-[20%] md:absolute bottom-0 left-0 h-auto" />
          <Image src="/images/doctor.png" alt="Image" width={400} height={600} className="w-1/2 md:w-[20%] md:absolute top-0 right-0 h-auto" />
        </div>
      </div>

      {/* newsletter form */}
      <div className="container md:pb-52 md:pt-53 pb-20 pt-20 relative">
        <Image src="/images/icon-plus.svg" alt="plus" width={128} height={128} className="absolute -top-[5%] md:top-[20%] lg:top-[20%] left-[2%] lg:left-1 w-16 lg:w-32 h-auto" />
        <div className="max-w-[700px] mx-auto">
          <form action="" className="flex">
            <input type="email" placeholder="Email Address" required className="border bg-primary/5 border-primary/35 lg:text-[25px] md:text-xl text-base tracking-[0.015em] py-4 md:px-6.5 px-3 rounded-tl-md rounded-bl-md  w-full" />
            <button type="submit" className="whitespace-nowrap font-heading uppercase bg-secondary lg:text-lg md:text-base text-xs md:tracking-[0.20em] text-dark cursor-pointer py-4 md:py-4 px-3 md:px-14 rounded-tr-md rounded-br-md shadow-[0px_0px_54px_0px_rgba(255,118,59,0.6)] hover:bg-secondary/80 transition-all duration-300">
              LEARN MORE
            </button>
          </form>
          <p className="text-center text-xs tracking-[0.015em] mt-5 opacity-40 max-w-[620px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* health care */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="md:w-5/12 w-full md:pl-10 lg:pl-28 -mb-10 md:mb-0 md:order-1 relative ">
          <Image src="/images/dots.svg" alt="dots" width={254} height={254} className="lg:w-[254px] md:w-[150px] w-[100px] h-auto" />
        </div>
        <Image src="/images/health-care.png" alt="health care" width={1200} height={800} className="md:w-7/12 w-full h-auto" />
      </div>

      {/* offer */}
      <div className="md:max-w-[90%] w-full ml-auto relative md:-mt-20 bg-dark md:p-10 p-5 md:mb-30 mb-0">
        <h2 className="max-w-[885px] lg:text-[67px] md:text-[40px] text-3xl leading-[129%] -tracking-[0.025em]">
          Need to offer <span className="font-serif">nationwide</span> access to health care providers?
        </h2>
        <div className="flex justify-between flex-wrap md:mt-10 mt-5">
          <div className="md:w-5/12 w-full lg:pr-26 pr-5 opacity-60 flex flex-col justify-between">
            <p className="lg:text-xl text-base tracking-[0.015em] max-w-[430px] lg:mt-5">
              MagnaCare has an extensive PPO network that includes all 50 states and Puerto Rico, with top-rated doctors and hospitals, as well as inpatient and outpatient services such as rehab centers, urgent care centers and ambulatory surgery centers.
            </p>
            <a href="#" className="font-heading uppercase text-base tracking-widest text-primary md:mt-10 mt-5 inline-block">CONTACT US</a>
          </div>
          <div className="md:w-7/12 w-full mt-10 md:mt-0">
            <Image src="/images/map.svg" alt="map" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
