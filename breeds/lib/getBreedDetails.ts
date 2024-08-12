import { PetType } from "@/enums";

const API_KEY = process.env.API_KEY;

export async function getBreedDetails(animalType: PetType, breedId: string) {
   
    const response=await fetch(
     `https://api.the${animalType}api.com/v1/images/${breedId}`,
     {
       headers: {
         "x-api-key": API_KEY!,
       },
     }
    );
    
      const breed = await response.json();
  return breed;
}
