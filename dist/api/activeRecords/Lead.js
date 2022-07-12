"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Сделка (сущность)
 */
const ResourceEntity_1 = tslib_1.__importDefault(require("../ResourceEntity"));
const HasCreate_1 = require("./decorators/HasCreate");
const HasUpdate_1 = require("./decorators/HasUpdate");
const HasSave_1 = require("./decorators/HasSave");
const HasFetch_1 = require("./decorators/HasFetch");
/**
 * Сделка
 */
let Lead = class Lead extends ResourceEntity_1.default {
    getAttributes() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            responsible_user_id: this.responsible_user_id,
            group_id: this.group_id,
            status_id: this.status_id,
            pipeline_id: this.pipeline_id,
            loss_reason_id: this.loss_reason_id,
            source_id: this.source_id,
            created_by: this.created_by,
            updated_at: this.updated_at,
            closed_task_at: this.closed_task_at,
            is_deleted: this.is_deleted,
            custom_fields_values: this.custom_fields_values,
            score: this.score,
            account_id: this.account_id,
            is_price_modified_by_robot: this.is_price_modified_by_robot,
            _embedded: this._embedded
        };
    }
    setAttributes(attributes) {
        this.id = attributes.id;
        this.name = attributes.name;
        this.price = attributes.price;
        this.responsible_user_id = attributes.responsible_user_id;
        this.group_id = attributes.group_id;
        this.status_id = attributes.status_id;
        this.pipeline_id = attributes.pipeline_id;
        this.loss_reason_id = attributes.loss_reason_id;
        this.source_id = attributes.source_id;
        this.created_by = attributes.created_by;
        this.updated_by = attributes.updated_by;
        this.closed_task_at = attributes.closed_task_at;
        this.is_deleted = attributes.is_deleted;
        this.custom_fields_values = attributes.custom_fields_values;
        this.score = attributes.score;
        this.account_id = attributes.account_id;
        this.is_price_modified_by_robot = attributes.is_price_modified_by_robot;
        this._embedded = attributes._embedded;
    }
};
Lead = tslib_1.__decorate([
    HasCreate_1.HasCreate,
    HasUpdate_1.HasUpdate,
    HasFetch_1.HasFetch,
    HasSave_1.HasSave
], Lead);
exports.default = Lead;
//# sourceMappingURL=Lead.js.map