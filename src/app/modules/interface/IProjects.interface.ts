export interface IProjects {
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
  description: string;
  frameworks:  Array<{
    src: string;
    alt: string;
    link: string;
    name: string;
  }>
  links: [
    {
      name: string;
      href: string;
    }
  ]
}