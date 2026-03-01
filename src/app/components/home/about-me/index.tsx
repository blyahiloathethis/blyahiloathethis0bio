import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["He/Him", "Fave ─ Forget Me Not, Moldir & Lopera", "20+", "CN/DE/EN", "Repost/♡", "No Repost Ships", "Mostly keep to myself", "Auto-Based User", "Heteroromantic Ace", "Homosexual Aro", "Hobby: FE", "Into: Classic Literature, Boozes, Classic Art"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10 bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">A regular salaried worker hopping between HK, SGP, and UAE. Now I only play <span className="bg-[linear-gradient(90deg,_rgba(139,59,235,0.3)_0%,_rgba(71,71,243,0.05)_100%)]">R1999</span>, and I lurk on Twitter occasionally.</h2>
                            <h5 className="text-secondary font-normal">UID: 706745116 / ẞ</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Basic Info</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe