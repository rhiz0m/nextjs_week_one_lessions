import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Your GET request handling logic here
    return NextResponse.json({
      message: "GET request success - Hello Next.JS World",
      myId: 2023,
      school: "STI, Stockholms Tekniska Institut",
      course: "Web Communication, API and Backend",
      framework: "Next.js",
      programLanguages: "Typescript/Javascript",
    });
  } catch (error) {
    return NextResponse.error();
  }
}
