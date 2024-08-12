
    type Dog ={
    id: string,
    width: number,
    height: number,
    url: string,
    // name?: string,
        breeds: {
            [ x: string ]: string,
              weight: {
                metric: string,
                imperic: string
              } 
            }[]
}
 
type Cat=Omit<Breed,'breeds'>

   

 