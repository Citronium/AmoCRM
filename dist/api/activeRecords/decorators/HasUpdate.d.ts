import { IResourceEntity, IResourceFactory } from "../../../interfaces/api";
import { TEntityConstructor } from "../../../types";
import { IRequestOptions } from "../../../interfaces/common";
import { IHasUpdateFactory } from "../../factories/mixins/hasUpdate";
export interface IHasUpdateEntity<T extends IResourceFactory<IResourceEntity<T>>> extends IResourceEntity<T> {
    update(options?: IRequestOptions): Promise<T>;
}
export declare function HasUpdate<T extends TEntityConstructor<F>, F extends IHasUpdateFactory<IResourceEntity<F>>>(Base: T): {
    new (...args: any[]): {
        update(options?: IRequestOptions | undefined): Promise<IResourceEntity<F>>;
        id?: number | undefined;
        updated_at?: number | undefined;
        isNew(): boolean;
        getFactory(): F;
        getAttributes(): import("../../../interfaces/api").IEntityAttributes;
        setAttributes(attributes?: import("../../../interfaces/api").IEntityAttributes | undefined): void;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        on(eventName: string | symbol, listener: (...args: any[]) => void): any;
        once(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        off(eventName: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol | undefined): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(eventName: string | symbol): Function[];
        rawListeners(eventName: string | symbol): Function[];
        emit(eventName: string | symbol, ...args: any[]): boolean;
        listenerCount(eventName: string | symbol): number;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): any;
        eventNames(): (string | symbol)[];
        subscribe(subscriber: import("../../../common/EventEmitter").IEventEmitter): import("../../../common/EventEmitter").IEventEmitter;
        unsubscribe(subscriber: import("../../../common/EventEmitter").IEventEmitter): import("../../../common/EventEmitter").IEventEmitter;
    };
} & T;
