"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasFetch = void 0;
const tslib_1 = require("tslib");
function HasFetch(Base) {
    return class HasFetch extends Base {
        fetch(criteria, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.isNew()) {
                    return false;
                }
                const id = this.id;
                const factory = this.getFactory();
                const lead = yield factory.getById(id, criteria, options);
                this.emit('fetch');
                return lead;
            });
        }
    };
}
exports.HasFetch = HasFetch;
//# sourceMappingURL=HasFetch.js.map