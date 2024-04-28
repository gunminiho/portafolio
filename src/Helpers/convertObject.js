import Translation from "../assets/translation.json";
import insertLineBreaks from "./insertLineBreak";

const convertObject = (object, language) => {
  const translation = Translation;
  let result = "";
  const mainKey = Object.keys(object);
  //console.log("MAINKEY: ",mainKey);
  console.log("OBJECT: ",object[mainKey]);
  if (Array.isArray(object[mainKey])) {
    for (let i = 0; i < object[mainKey].length; i++) {
      for (const key in object[mainKey][i]) {
        //console.log("KEY: ",key);
        result += `${translation[language][key]}: ${key === "responsibilities" ?  "\n"+object[mainKey][i][key].map((e =>insertLineBreaks(e,50))).join("\n") : object[mainKey][i][key] }\n`;
      }
      result += "\n";
    }
    console.log("RESULT: ",result);
    return result;
  } else {
    for (const key in object[mainKey]) {
      //console.log("tipo: ", typeof object[mainKey][key]);
      console.log("key: ",key);
      //console.log(translation[language]);
      result += `${translation[language][key]}: ${Array.isArray(!object[mainKey][key]) ? object[mainKey][key] : typeof object[mainKey][key] !== "string" ? insertLineBreaks(object[mainKey][key].join(", ")) : object[mainKey][key] }\n`;
    }
  }
  return result;
};

export default convertObject;
/* .join(", ").map(e=>insertLineBreaks(e,50)) */