import { http } from "./http";
import { Sick } from "../types";

export const fetchSuggestions = (keyword: string) =>
  http.get<Sick>("/sick?_limit=10", { params: { q: keyword } });
