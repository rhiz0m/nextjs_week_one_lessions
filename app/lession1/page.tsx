import Image from "next/image";

export default function lektion1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black bold font-bold">Lession 1</p>
        <p>Hello Nest.js World</p>
        <p>Summan: {2 + 2}</p>
        <p>{4 > 2 ? "TRUE" : "FALSE"}</p>
        <p>{2 < 4 ? "<p></p>" : "<h1> </h1>"}</p>
        <p>{2 + 2 == 99 || 2 + 2 == 4 ? "TRUE" : "FALSE"}</p>
        <p>{2 + 2 == 4 && 2 + 4 == 6 ? "TRUE" : "FALSE"}</p>
        <p></p>
      </div>
    </main>
  );
}
