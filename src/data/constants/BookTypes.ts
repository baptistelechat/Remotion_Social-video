interface IBookType {
  type: string;
  gender: "Masculin" | "Féminin";
}

export const BookTypes: IBookType[] = [
  {
    type: "Mangas",
    gender: "Masculin",
  },
  {
    type: "Romans",
    gender: "Masculin",
  },
  {
    type: "Bandes Dessinées",
    gender: "Féminin",
  },
];
