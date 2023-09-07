import { http } from "./http";

export const getSuggestions = (keyword: string) =>
  http.get<any>("/sick", { params: { q: keyword } });
