import { PetType } from "@/enums";


const API_KEY = process.env.API_KEY;


export async function getAllBreeds(animalType: PetType) {
    const response=await fetch(
    `https://api.the${animalType}api.com/v1/images/search?limit=10&has_breeds=1`,
    {
      headers: {
        "x-api-key": API_KEY!,
      },
    }
    );
    
  const breeds = response.json();
  return breeds;
}
