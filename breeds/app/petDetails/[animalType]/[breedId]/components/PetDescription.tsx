import Image from "next/image";

interface PetDescriptionProps {
  pet: Dog;
}

export default function PetDescription({
  pet,
}: PetDescriptionProps) {
  return (
    <section className="petDetailsPage">
      <div className="heroImgContainer">
        <Image
          alt="cat"
          src={pet.url}
          width={300}
          height={300}
          className="image rounded-2xl shadow-lg"
          priority
        />
      </div>
      <div className="descriptionContainer">
        {Object.entries(pet.breeds[0])
          .filter(
            /// exlude some key-value pairs
            ([key]) =>
              key !== "id" &&
              key !== "vetstreet_url" &&
              key !== "country_codes" &&
              key !== "cfa_url" &&
              key !== "vcahospitals_url" &&
              key !== "reference_image_id" &&
              key !== "wikipedia_url" &&
              key !== "name"
          )
          .map(([key, value]) => {
            /// replace _ to space in key
            /// in height and weight show only metric system units
            return (
              <p key={key} className="pr-10">
                <span className="font-bold">
                  {" "}
                  {key.replace(/_/g, " ")}:
                </span>
                &nbsp;
                {`${
                  (key === "height" ||
                    key === "weight") &&
                  typeof value === "object"
                    ? `${value.metric} ${
                        key === "weight"
                          ? "kilos"
                          : "centimeters"
                      }`
                    : value
                }`}
              </p>
            );
          })}
      </div>
    </section>
  );
}
