import Image from "next/image";

export default function lektion1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black bold font-bold">Lession 1</p>
        <p>Summan: {4 + 4}</p>
        <p>{4 > 2 ? "TRUE" : "FALSE"}</p>
      </div>
    </main>
  );
}
