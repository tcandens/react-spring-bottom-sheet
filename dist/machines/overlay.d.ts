declare type OverlayEvent = {
    type: 'OPEN';
} | {
    type: 'SNAP';
    payload: {
        y: number;
        velocity: number;
        source: 'dragging' | 'custom' | string;
    };
} | {
    type: 'CLOSE';
} | {
    type: 'DRAG';
} | {
    type: 'RESIZE';
};
interface OverlayContext {
    initialState: 'OPEN' | 'CLOSED';
    snapSource: string;
}
export declare const overlayMachine: import("xstate").StateMachine<OverlayContext, any, OverlayEvent, {
    value: any;
    context: OverlayContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, OverlayEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
export {};
