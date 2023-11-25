"use client";
import { useState } from "react";

// All components and pages are by default SERVER
// You cant show objects in RETURN

export default function Lession3() {
  interface Student {
    name: string;
    class: string;
    year: number;
  }

  // useState Hook

  const [apiData, setApiData] = useState<string>("");
  const [name, setName] = useState<string>("Andreas ");
  const [num, setNum] = useState<number>(1979);
  const [student, setStudent] = useState<Student>({
    name: "Anton",
    class: "IOS/Android Dev",
    year: 2022,
  });

  // Async function
  const fetchData = async () => {
    console.log("I am being clicked");
    // Getting data
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    //await response.json
    //setApiData(await response.json()); get a whole object.

    // Transform the whole object to a string, stringified. Dont forget the await in response.json, else it returns an empty object.

    if (response.status) {
      setApiData(JSON.stringify(await response.json()));
      console.log(apiData);
    }
  };

  return (
    <main className="m-4 flex min-h-screen flex-col items-center justify-center bg-slate-200 ">
      <div className="m-2n space-y-4  flex-col h-screen bg-sky-7ö00 ">
        <p className="bg-sky-500 hover:bg-sky-200">Lektion 3</p>
        <p> Hejsan! </p>
        <p className="p-1">
          Name: {name} <br />
          Born: {num}
        </p>
        <p className="p-1">
          Students name: {student.name} <br />
          Students class: {student.class} <br />
          Students year: {student.year}
        </p>
        <p
          onClick={() => {
            setName("Linda ");
            setNum(1981);
            setStudent({
              name: "Linda",
              class: "Ethnology",
              year: 2008,
            });
          }}
          className="m-2 p-6 rounded-lg bg-slate-50 hover: cursor-pointer"
        >
          Almighty State Button!
        </p>

        <p className="m-2 p-2 bg-slate-500">Item 1: styled</p>
        <p className="m-2 p-4 rounded-sm bg-slate-400">Item 2: styled</p>
        <p className="m-4 p-6 rounded-md bg-slate-600">Item 3: styled</p>
        <p>API Data: {apiData}</p>
        <p
          onClick={fetchData}
          className="m-2 p-6 rounded-lg bg-slate-50 hover: cursor-pointer"
        >
          FETSCH DATA
        </p>
      </div>
    </main>
  );
}

/* 
https://css-tricks.com/
https://flexboxfroggy.com/#sv
className="flex min-h-screen flex-col items-center justify-between p-24" */
