import Image from "next/image";
import { Interface } from "readline";

interface Book {
  name: string;
  author: string;
  amountOfPages: number;
  isPublished: boolean;
}

interface Student {
  name: string;
  age: number;
  books: Book[];
}

interface Animal {
  species: string;
  canFly: boolean;
}

const whiteShark: Animal = {
  species: "fish",
  canFly: false,
};

const eagle: Animal = {
  species: "birds",
  canFly: true,
};

const ArrayOfAnimals: Animal[] = [whiteShark, eagle];

const name: string = "";
const num: number = 0;
const bool: boolean = false;
const numArray: number[] = [];

enum dayOfTheWeek {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let pickAday: dayOfTheWeek = dayOfTheWeek.monday;

export default function lektion2() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black bold font-bold">Lektion 2</p>
        <p>First day of the week: {pickAday} (Index)</p>
        <ul>
          {ArrayOfAnimals.map((animal, index) => (
            <li key={index}>
              Species: {animal.species}, Can fly: {animal.canFly.toString()}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
