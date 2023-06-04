interface IProvider {
  label: string;
  value: string;
  image: string;
}

export const providers: IProvider[] = [
  {
    label: "Basic Health Unit",
    image: "/providers/Provider-1.png",
    value: "ubs",
  },
  {
    label: "Plus Health",
    image: "/providers/Provider-2.png",
    value: "mais-saude",
  },
  {
    label: "Baptist of Rio de Janeiro",
    image: "/providers/Provider-3.png",
    value: "baptist",
  },
  {
    label: "University of Taubaté",
    image: "/providers/Provider-4.png",
    value: "unitau",
  },
];
