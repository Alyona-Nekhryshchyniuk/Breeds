import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CatContent {
  pet: Cat;
  name: string;
  cardLinkHref: string;
}

export default async function Content({
  pet,
  name,
  cardLinkHref,
}: CatContent) {


  return (
    <Link
      className="cardGeometry"
      href={cardLinkHref}  //// "petDetails/${PetType.dog}/${pet.id}"
    >
      <p className="title">{name}</p>
      <div className="imageContainer">
        <Image
          className="image"
          alt="breed"
          src={pet.url}
          width={200}
          height={200}
          priority
        />
      </div>
    </Link>
  );
}
