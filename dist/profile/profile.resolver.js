"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_type_1 = require("./profile.type");
const profile_service_1 = require("./profile.service");
let ProfileResolver = class ProfileResolver {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    profile() {
        return this.profileService.getProfile();
    }
};
exports.ProfileResolver = ProfileResolver;
__decorate([
    (0, graphql_1.Query)(() => profile_type_1.Profile),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", profile_type_1.Profile)
], ProfileResolver.prototype, "profile", null);
exports.ProfileResolver = ProfileResolver = __decorate([
    (0, graphql_1.Resolver)(() => profile_type_1.Profile),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileResolver);
//# sourceMappingURL=profile.resolver.js.map