"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasSave = void 0;
function HasSave(Base) {
    return class HasSave extends Base {
        save(options) {
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
exports.HasSave = HasSave;
//# sourceMappingURL=HasSave.js.map