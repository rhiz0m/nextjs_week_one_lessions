import Image from "next/image";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black bold font-bold">Lessions, Week 1. Content:</p>
        <p className="text-black">Lession 1: Routing, Urls, api & typescript</p>
        <p className="text-black">Lession 2: Protokoll & Typescript</p>
        <p className="text-black">Lession 3: useState, TailWind & fetch() </p>
      </div>
    </main>
  );
}
