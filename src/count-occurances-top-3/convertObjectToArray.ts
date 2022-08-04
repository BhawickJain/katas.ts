import Dictionary from "../count-occurances/Dictionary";

const convertObjectToArray = (obj: Dictionary<number>): [string, number][] => {
  const arrayRepresentation: [string, number][] = [];
  for (let key in obj) {
    arrayRepresentation.push([key, obj[key]]);
  }
  return arrayRepresentation;
};

export default convertObjectToArray;
