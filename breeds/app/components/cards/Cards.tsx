import DogContent from "../cardContent/DogContent";
import CatContent from "../cardContent/CatContent";


async function Cards({ cats, dogs }: Record<string, Promise<Cat[] | Dog[]> >) {
  const catList = await cats;
  const dogList = await dogs;

  return (
    <div className="cards">
      {[...catList, ...dogList].map((el) => (
        <div key={el.id} className="card">
          {el.breeds ? (
            <DogContent pet={el as Dog} />
          ) : (
            <CatContent pet={el as Cat} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
