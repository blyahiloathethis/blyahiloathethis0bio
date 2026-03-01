import { NextResponse } from "next/server";

const projectOverview = {
    sideProjects: [
        { name: "Formless", url: "#" }
    ]
};

export const GET = async () => {
    return NextResponse.json({
        projectOverview
    });
};