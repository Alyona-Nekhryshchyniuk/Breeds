import { getAllBreeds } from "@/lib/getAllBreeds";
import { PetType } from "@/enums";
import Cards from "./components/cards/Cards";
import { Suspense } from "react";

export default function Home() {
  const catsPromise: Promise<Cat[]> =
    getAllBreeds(PetType.cat);

  const dogsPromise: Promise<Dog[]> =
    getAllBreeds(PetType.dog);

  return (
    <main className=" min-h-screen">
      <Suspense
        fallback={
          <div className="title pt-10">
            Loading ...
          </div>
        }
      >
        <h1 className="boldTitle">Pets</h1>
        <Cards
          cats={catsPromise}
          dogs={dogsPromise}
        />
      </Suspense>
    </main>
  );
}
