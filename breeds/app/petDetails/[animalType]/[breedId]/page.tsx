import { PetType } from "@/enums";
import { getAllBreeds } from "@/lib/getAllBreeds";
import { getBreedDetails } from "@/lib/getBreedDetails";
import { getSameBreedCats } from "@/lib/getSameBreedCats";
import { Metadata } from "next";
import PetDescription from "./components/PetDescription";
import Card from "./components/Card";

interface BreedIdProps {
  params: {
    breedId: string;
    animalType: PetType;
  };
}

export async function generateMetadata({
  params: { animalType, breedId },
}: BreedIdProps): Promise<Metadata> {
  const breedDetailsPromise: Promise<any> =
    getBreedDetails(animalType, breedId);

  const pet: Cat | Dog =
    await breedDetailsPromise;

  const name = pet.breeds[0].name;

  return {
    title: name,
    description: `This is page with pets of ${name} breed`,
  };
}

async function BreedId({
  params: { animalType, breedId },
}: BreedIdProps) {
  const breedDetailsPromise: Promise<any> =
    getBreedDetails(animalType, breedId);
  const pet = await breedDetailsPromise;

  const sameBreedPetsPromise: Promise<any> =
    getSameBreedCats(
      animalType,
      pet.breeds[0].id
    );

  const sameBreedPets: Cat[] | Dog[] =
    await sameBreedPetsPromise;

  return (
    <div>
      <h1 className="boldTitle">
        {pet.breeds[0].name}
      </h1>
      <div className="petDescriptionContainer">
        <PetDescription pet={pet} />
      </div>
      <p className="title pb-10 pt-5">
        Other pets of same breed
      </p>

      <div className="cards">
        {sameBreedPets.map((el) => (
          <Card key={el.id} pet={el} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const catPromise: Promise<Cat[]> = getAllBreeds(
    PetType.cat
  );
  const cats = await catPromise;

  const dogPromise: Promise<Dog[]> = getAllBreeds(
    PetType.dog
  );
  const dogs = await dogPromise;

  const catParams = cats.map((breed) => ({
    breedId: breed.id,
    animalType: PetType.cat,
  }));

  const dogParams = dogs.map((breed) => ({
    breedId: breed.id,
    animalType: PetType.dog,
  }));

  return [...catParams, ...dogParams];
}

export default BreedId;
