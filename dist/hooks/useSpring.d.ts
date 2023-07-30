export declare function useSpring(): [{
    ready: import("@react-spring/core").SpringValue<number>;
    maxHeight: import("@react-spring/core").SpringValue<number>;
    minSnap: import("@react-spring/core").SpringValue<number>;
    maxSnap: import("@react-spring/core").SpringValue<number>;
    y: import("@react-spring/core").SpringValue<number>;
}, import("@react-spring/core").SpringRef<{
    ready: number;
    maxHeight: number;
    minSnap: number;
    maxSnap: number;
    y: number;
}>];
export declare type Spring = ReturnType<typeof useSpring>[0];
export declare type SpringSet = ReturnType<typeof useSpring>[1];
