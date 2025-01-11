export type classList = Record<string, boolean>;

export type element = string;

export type mods = Record<string, boolean>;

export type factory = (arg0?: element | mods, mods?: mods) => classList;

export type factoryCreator = (arg: element) => factory;
