// Задание 1
import webpack from "webpack";

export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
    return teams.reduce((prev, curr) => curr.score > prev.score ? curr : prev).name
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
    return "?" + Object.keys(qsObj)
        .map(k => `${k}=${qsObj[k]}`)
        .reduce((prev, curr) => `${prev}&${curr}`)
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
    return qs.split("?")[1]
        .split("&")
        .map((pair) => pair.split("="))
        .reduce((acc, pair) => (acc[pair[0]] = pair[1], acc), {} as QsObj);
};
