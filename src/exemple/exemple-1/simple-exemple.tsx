import Title from "./title";

type Props = {};

const SimpleExemple = ({}: Props) => {
  return (
    <div>
      <h2>------------ Exemple n°1 - Titres ------------</h2>
      <Title headingLevel="h3">texte h3</Title>
      <Title headingLevel="h4">texte h4</Title>
      <Title headingLevel="h5">texte h5</Title>
    </div>
  );
};

export default SimpleExemple;

// const SimpleExemple = ({}: Props) => {
//   return (
//     <div>
//       <Title headingLevel="h2">Exemple de polymorphisme en React</Title>
//       <Title headingLevel="h3">Exemple de polymorphisme en React</Title>
//       <Title headingLevel="h4">Exemple de polymorphisme en React</Title>
//       <Title headingLevel="h5">Exemple de polymorphisme en React</Title>
//       <Title headingLevel="h6">Exemple de polymorphisme en React</Title>
//     </div>
//   );
// };
