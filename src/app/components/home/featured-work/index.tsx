"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto px-4 sm:px-7">
                        <div className="flex flex-col py-10">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Personal Project</p>
                        </div>
                        <div className="grid grid-cols-1 border-t border-primary/10">
                            {featureWork?.map((value: any, index: number) => {
                                const isRightCol = index % 2 === 1;
                                return (
                                    <div
                                        key={index}
                                        className={`group flex flex-col gap-3.5 sm:gap-5 py-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                    >
                                        <Link href={"https://leeresehnsucht.vercel.app"} target="_blank" className="overflow-hidden">
                                            <Image
                                                src={value?.image}
                                                alt="Image"
                                                width={768}
                                                height={432}
                                                className="w-full h-auto group-hover:scale-105 transition-all duration-300 ease-in-out"
                                            />
                                        </Link>
                                        <div className="flex flex-col gap-1 sm:gap-2">
                                            <Link href={"https://leeresehnsucht.vercel.app"} target="_blank"><h4>{value?.title}</h4></Link>
                                            <p>{value?.roles?.join(', ')}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork