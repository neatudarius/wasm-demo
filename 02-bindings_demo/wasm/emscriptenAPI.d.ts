export {};

type ModuleBindings = Record<string, unknown>;

declare global {
    const Module: {
        ASAN_OPTIONS?: string;
    } & ModuleBindings;
}
