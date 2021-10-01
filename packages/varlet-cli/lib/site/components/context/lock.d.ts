export declare function resolveLock(): void;
export declare function addLock(uid: number): void;
export declare function releaseLock(uid: number): void;
/**
 * 组件锁操作
 * @param props 组件props
 * @param state 组件props中控制组件加锁的开关对应的key值
 * @param use 组件props中控制组件加锁的开关是否可用对应的key值
 */
export declare function useLock(props: any, state: string, use?: string): void;
