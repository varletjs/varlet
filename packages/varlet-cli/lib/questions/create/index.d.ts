declare const projectNamePrompt: ({
    name: string;
    type: string;
    message: string;
    initial: string;
    onState: (state: any) => void;
    active: string;
    inactive: string;
} | {
    name: string;
    type: () => Promise<"toggle" | null>;
    initial: boolean;
    message: () => Promise<string>;
    active: string;
    inactive: string;
    onState?: undefined;
} | {
    name: string;
    type: (prev: any, values: any) => null;
    message?: undefined;
    initial?: undefined;
    onState?: undefined;
    active?: undefined;
    inactive?: undefined;
})[];
declare const localePrompt: {
    name: string;
    type: string;
    message: string;
    initial: boolean;
    active: string;
    inactive: string;
};
declare const componentStylePrompt: {
    name: string;
    type: string;
    message: string;
    choices: {
        title: string;
        value: string;
    }[];
};
export { componentStylePrompt, localePrompt, projectNamePrompt };
