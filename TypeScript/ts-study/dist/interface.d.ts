declare const getUsername: (user: User) => void;
interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: Say;
}
interface Say {
    (words: string): string;
}
interface Config {
    width?: number;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
declare let mySquare: {
    area: number;
};
interface VIPUser extends User {
    broadcas: () => void;
}
interface SupperUser extends VIPUser {
    getGrade: () => void;
}
