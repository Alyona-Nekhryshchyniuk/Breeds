import { getBreedDetails } from "@/lib/getBreedDetails";
import React from "react";
import { PetType } from "@/enums";
import Content from "./Content";

interface CatContent {
  pet: Cat;
}

export default async function CatContent(
  props: CatContent
) {
  const { pet } = props;
  const catDetailsPromise: Promise<any> =
    getBreedDetails(PetType.cat, pet.id);
  const cat = await catDetailsPromise;

  const name = cat.breeds[0].name;

  return (
    <Content
      cardLinkHref={`/petDetails/${[
        PetType.cat,
          ]}/${pet.id}` }
          
      name={name}
      {...props}
    />
  );
}
