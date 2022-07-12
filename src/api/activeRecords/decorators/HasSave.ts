import { IResourceEntity, IResourceFactory } from "../../../interfaces/api";
import { TConstructor, TEntityConstructor } from "../../../types";
import { IRequestOptions } from "../../../interfaces/common";
import { IHasCreateFactory } from "../../factories/mixins/hasCreate";
import { IHasUpdateFactory } from "../../factories/mixins/hasUpdate";

export type IHasCreateAndUpdateFactory<T extends IResourceEntity<IResourceFactory<T>>> = IHasCreateFactory<T> & IHasUpdateFactory<T>;

export interface IHasCreateAndUpdateEntity<T extends IResourceFactory<IResourceEntity<T>>> extends IResourceEntity<T> {
    create?(options?: IRequestOptions): Promise<T|false>;
    update?(options?: IRequestOptions): Promise<T|false>;
}

export interface IHasSaveEntity<T extends IResourceFactory<IResourceEntity<T>>> extends IResourceEntity<T>, IHasCreateAndUpdateEntity<T> {
    save(options?: IRequestOptions): Promise<T|false>;
}

export type THasCreateAndUpdateEntityConstructor
    <T extends IResourceFactory<IHasCreateAndUpdateEntity<T>>> =
    TConstructor<IHasCreateAndUpdateEntity<T>>;

export function HasSave<T extends THasCreateAndUpdateEntityConstructor<F>,
F extends IHasCreateAndUpdateFactory<IHasCreateAndUpdateEntity<F>>
    > (Base: T) {
    return class HasSave extends Base {
        save(options?: IRequestOptions) {
            const { name } = Base;
            if (typeof this.create !== 'function') {
                throw new Error(`${name}.create method is not defined`);
            }
            if (typeof this.update !== 'function') {
                throw new Error(`${name}.update method is not defined`);
            }
            if (this.isNew()) {
                return this.create(options);
            }
            return this.update(options);
        }
    };
}