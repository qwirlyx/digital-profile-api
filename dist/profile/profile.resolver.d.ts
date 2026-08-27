import { Profile } from './profile.type';
import { ProfileService } from './profile.service';
export declare class ProfileResolver {
    private readonly profileService;
    constructor(profileService: ProfileService);
    profile(): Profile;
}
