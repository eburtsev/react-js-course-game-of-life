// Задание 1
export type OriginalTeam = {
    size: number;
    name: string;
    league: string;
};

export type ExpectedTeam = {
    name: string;
    league: string;
    roster: number;
};

export const originalTeamToExpectedTeam = (originalTeam: OriginalTeam): ExpectedTeam => {
    const { league } = originalTeam;
    return { name: "New York Badgers", roster: 25, league };
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: readonly number[]): SomeArray => {
    return ["two", ...originalArray.slice(1, originalArray.length).map((i) => i + 1)];
};

// Задание 3

export type Team = {
    name: string;
    captain: {
        name: string;
        age: number;
    };
};

export const originalTeamToExpectedTeam2 = (originalTeam: Team): Team => {
    const { captain } = originalTeam;
    return { ...originalTeam, captain: { ...captain, age: captain.age + 1 } };
};
