import { PetType } from "@/enums";
import Content from "./Content";

interface DogContent {
  pet: Dog;
}

export default function DogContent(
  props: DogContent
) {
  const { pet } = props;
  const name = pet.breeds[0].name;

  return (
    <Content
      cardLinkHref={`/petDetails/${[
        PetType.dog,
      ]}/${pet.id}`}
      name={name}
      {...props}
    />
  );
}
