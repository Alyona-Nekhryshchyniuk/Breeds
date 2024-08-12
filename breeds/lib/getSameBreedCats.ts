import { PetType } from "@/enums";

const API_KEY = process.env.API_KEY;

export async function getSameBreedCats(animalType: PetType, breedName: any) {
  
    const response=await fetch(
     `https://api.the${animalType}api.com/v1/images/search?limit=10&breed_ids=${breedName}`,
     {
       headers: {
         "x-api-key": API_KEY!,
       },
     }
    );
    
      const pets = await response.json();
  return pets;
}