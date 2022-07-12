import { IResourceEntity, IResourceFactory } from "../../../interfaces/api";
import { TConstructor } from "../../../types";
import { IRequestOptions } from "../../../interfaces/common";
import { IHasCreateFactory } from "../../factories/mixins/hasCreate";
import { IHasUpdateFactory } from "../../factories/mixins/hasUpdate";
export declare type IHasCreateAndUpdateFactory<T extends IResourceEntity<IResourceFactory<T>>> = IHasCreateFactory<T> & IHasUpdateFactory<T>;
export interface IHasCreateAndUpdateEntity<T extends IResourceFactory<IResourceEntity<T>>> extends IResourceEntity<T> {
    create?(options?: IRequestOptions): Promise<T | false>;
    update?(options?: IRequestOptions): Promise<T | false>;
}
export interface IHasSaveEntity<T extends IResourceFactory<IResourceEntity<T>>> extends IResourceEntity<T>, IHasCreateAndUpdateEntity<T> {
    save(options?: IRequestOptions): Promise<T | false>;
}
export declare type THasCreateAndUpdateEntityConstructor<T extends IResourceFactory<IHasCreateAndUpdateEntity<T>>> = TConstructor<IHasCreateAndUpdateEntity<T>>;
export declare function HasSave<T extends THasCreateAndUpdateEntityConstructor<F>, F extends IHasCreateAndUpdateFactory<IHasCreateAndUpdateEntity<F>>>(Base: T): {
    new (...args: any[]): {
        save(options?: IRequestOptions | undefined): Promise<false | F>;
        create?(options?: IRequestOptions | undefined): Promise<false | F>;
        update?(options?: IRequestOptions | undefined): Promise<false | F>;
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
