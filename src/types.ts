export type Sick = {
  sickCd: string;
  sickNm: string;
};

export type Cache = {
  keyword: string;
  staleTime: number;
  suggestions: Sick[];
};
