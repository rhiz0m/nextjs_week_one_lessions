import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black">Hello World</p>

        <p>Summan: {4 + 4}</p>
        <p>{4 > 2 ? "TRUE" : "FALSE"}</p>
      </div>
    </main>
  )
}
