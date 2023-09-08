import { http } from "./http";

export const getSuggestions = (keyword: string) =>
  http.get<any>("/sick?_limit=10", { params: { q: keyword } });
