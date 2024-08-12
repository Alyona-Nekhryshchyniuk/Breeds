import Image from "next/image";
import React from "react";

interface Card {
  pet: Cat | Dog;
}

function Card({ pet }: Card) {
  return (
    <div className="card h-56">
      <div className="imageContainer">
        <Image
          className="image"
          alt="breed"
          src={pet.url}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default Card;
