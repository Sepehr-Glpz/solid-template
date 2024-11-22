export default {
  get(key: string): string | never {
    key = `VITE_${key.trim()}`;
    const result = import.meta.env[key] as string;
    if (!result) {
      throw new Error(`environment variable: ${key} not found!`);
    }
    return result;
  },
};
