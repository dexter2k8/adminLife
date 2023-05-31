interface IProvider {
  label: string;
  value: string;
  image: string;
}

export const providers: IProvider[] = [
  {
    label: "Westlake Health Center",
    image: "/providers/Provider-1.png",
    value: "westlake",
  },
  {
    label: "Cano Health",
    image: "/providers/Provider-2.png",
    value: "cano-health",
  },
  {
    label: "Baptist South",
    image: "/providers/Provider-3.png",
    value: "baptist-south",
  },
  {
    label: "University of Miami",
    image: "/providers/Provider-4.png",
    value: "UMHS",
  },
];
