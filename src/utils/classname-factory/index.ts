import { mods, classList, element, factoryCreator } from "./types";

export const classNamesFactory: factoryCreator = (blockName: element) => {
  return function factory(arg0?: element | mods, mods?: mods): classList {
    let obj: classList = { [blockName]: true };

    if (typeof arg0 == "string") {
      const blockElement: element = `${blockName}__${arg0}`;
      obj = { [blockElement]: true };
      if (typeof mods == "object") {
        obj = {
          ...obj,
          ...attachMods(blockElement, mods),
        };
      }
    }

    if (typeof arg0 == "object") {
      let toAdd: mods = { ...arg0 };
      if (typeof mods == "object") {
        toAdd = { ...toAdd, ...mods };
      }
      obj = {
        ...obj,
        ...attachMods(blockName, toAdd),
      };
    }

    return obj;
  };
};

function attachMods(content: element, modifiers: mods) {
  return Object.entries(modifiers).reduce<classList>((prev, [key, value]) => {
    let current = "";
    if (key.startsWith("&")) current = key.substring(1);
    else current = `${content}--${key}`;
    return { ...prev, [current]: value };
  }, {});
}
