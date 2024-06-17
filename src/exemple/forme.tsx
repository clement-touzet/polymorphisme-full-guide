type Carre = {
  type: "carre";
  hauteur: number;
};

type Cercle = {
  type: "cercle";
  rayon: number;
};

type Props = {
  forme: Carre | Cercle;
};

const Forme = ({ forme }: Props) => {
  if (forme.type === "carre") {
    return <div>hauteur : {forme.hauteur}</div>;
  }
  if (forme.type === "cercle") {
    return <div>rayon : {forme.rayon}</div>;
  }
};

export default Forme;

export const Formes = () => {
  const monCarre: Carre = {
    type: "carre",
    hauteur: 4,
  };

  const monCercle: Cercle = {
    type: "cercle",
    rayon: 28,
  };
  return (
    <>
      <Forme forme={monCarre} />
      <Forme forme={monCercle} />
    </>
  );
};
