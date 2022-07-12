import { IResourceEntity } from "../../../interfaces/api";
import { TEntityConstructor } from "../../../types";
import { IRequestOptions } from "../../../interfaces/common";
import { ICanGetByIdFactory, IHasGetByIdCriteria } from "../../factories/mixins/hasGetById";
export interface IHasFetchEntity<T extends ICanGetByIdFactory<IResourceEntity<T>>> {
    fetch(criteria?: IHasGetByIdCriteria, options?: IRequestOptions): Promise<IHasFetchEntity<T> | false | null>;
}
export declare function HasFetch<T extends TEntityConstructor<F>, F extends ICanGetByIdFactory<IResourceEntity<F>>>(Base: T): {
    new (...args: any[]): {
        fetch(criteria?: IHasGetByIdCriteria | undefined, options?: IRequestOptions | undefined): Promise<false | IResourceEntity<F> | null>;
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
