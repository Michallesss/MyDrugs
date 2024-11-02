export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  tags: string[];
  discount?: number;
  description: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "Salvitis Collagen Flex 12000, płyn, 30 ml",
    image: "https://azcdn.doz.pl/image/d/product/e878c723-scale-180x180.webp",
    price: 9.99,
    tags: ["płyn", "shot collagen", "kolagen wołowy"],
    // discount: 35,
    description: "Salvitis Collagen Flex - to suplement diety w postaci płynu, który zawiera 12 g hydrolizatu kolagenu wołowego w porcji dziennej. Dodatkowo produkt został wzbogacony w metylosulfonylometan OptiMSM®, siarczan glukozaminy, witaminę C oraz ekstrakty z żywicy kadzidłowca indyjskiego i pędów bambusa. Składniki Salvitis Collagen Flex dbają o prawidłową kondycję stawów, kości i mięśni. Produkt przeznaczony dla osób dorosłych.   Smak owocowy.",
  },
  {
    id: 2,
    name: "Nurofen Express Forte, 400 mg, kapsułki miękkie, 30 szt.",
    image: "https://azcdn.doz.pl/image/d/product/ef77b7cc-scale-180x180.jpg",
    price: 22.99,
    tags: ["ibuprofen", "kapsułki", "ból", "gorączka", "stan zapalny"],
    discount: 15,
    description: "Nurofen Express Forte to lek należący do grupy niesteroidowych leków przeciwzapalnych (NLPZ). Stosowany jest do krótkotrwałego leczenia łagodnych i umiarkowanych bóli oraz jako lek przeciwgorączkowy."
  },
  {
    id: 3,
    name: "Rutinoscorbin, tabletki powlekane, 150 szt.",
    image: "https://azcdn.doz.pl/image/d/product/9eb3d3ef-scale-180x180.jpg",
    price: 18.79,
    tags: ["witamina c", "przeziębienie", "wzmocnienie"],
    // discount: 35,
    description: "Rutinoscorbin - produkt leczniczy stosowany w stanach przeziębienia oraz zakażenia wirusowego w tym grypie.",
  }
];