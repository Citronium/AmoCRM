import { IEntityAttributes, IResourceEntity, IResourceFactory } from "../interfaces/api";
import { EventEmitter } from "../common/EventEmitter";

/**
 * Основной класс сущностей
 * */
export default abstract class ResourceEntity
    <T extends IResourceFactory<IResourceEntity<T>>>
    extends
        EventEmitter
    implements
        IResourceEntity<T>
{
    public id?: number;
    public updated_at?: number;
    protected readonly factory: T;
    public required: string[] = [];

    constructor(factory: T) {
        super();
        this.factory = factory;
    }

    getFactory() {
        return this.factory;
    }

    /**
     * @returns присутствует ли сущность на портале AmoCRM
     * */
    isNew() {
        return this.id !== undefined;
    }

    /**
     * Возвращает все атрибуты сущности, которые должны синхронизироваться с порталом AmoCRM
     * */
    abstract getAttributes(): IEntityAttributes;

    /**
     * Устанавливает атрибуты сущности, которые должны синхронизироваться с порталом AmoCRM
     * */
    abstract setAttributes(attributes?: IEntityAttributes): void;
}