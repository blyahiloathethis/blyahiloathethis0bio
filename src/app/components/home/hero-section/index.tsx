import Image from "next/image"

const HeroSection = () => {
    const socialIcon = [
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/banner-bg-img.jpg"} alt="banner-img" width={1080} height={400} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-start justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"/images/hero-sec/user-img.png"} alt="user-img" width={145} height={145} className="border-4 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-left xs:items-start">
                                <h1>ß</h1>
                                <p className="text-violet-700 font-normal items-left xs:item-center">
                                 Casual r1999 Player or Typical Salaryman
                                </p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">HK, SGP, UAE </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

