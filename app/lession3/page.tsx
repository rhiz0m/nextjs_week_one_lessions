import Image from "next/image";

export default function lektion3() {
  return (
    <main className="m-4 flex min-h-screen flex-col items-center justify-center bg-slate-200 ">
      <div className="m-4 space-y-4  flex-col h-screen bg-sky-300 ">
        <p className="bg-sky-500 hover:bg-sky-200">Lektion 3</p>
        <p> Hejsan! </p>
        <p className="bg-slate-500">Item 1: styled</p>
        <p className="m-2 p-4 rounded-sm bg-slate-400 transition-transform hover: scale-150">
          Item 2: styled
        </p>
        <p className="m-4 p-6 rounded-md bg-slate-600">Item 3: styled</p>
        <p className="m-6 p-8 rounded-lg bg-slate-50">Item 4: styled</p>
        <p>Item non classname</p>
        <p>Item non classname</p>
      </div>
    </main>
  );
}

/* 
https://css-tricks.com/
https://flexboxfroggy.com/#sv
className="flex min-h-screen flex-col items-center justify-between p-24" */
