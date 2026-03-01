import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Personal R1999 Translation Archive",
        description: "For myself",
        roles: ["by Me"],
        image: "/images/feature-work/feature-img-2.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};