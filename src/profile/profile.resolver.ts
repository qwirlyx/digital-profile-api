import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './profile.type.js';
import { ProfileService } from './profile.service.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  async profile() {
    return this.profileService.getProfile();
  }
}