import { Injectable } from '@nestjs/common';
import { Profile } from './profile.type';

@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Иван Шевченко',
      description: 'Backend / Fullstack Developer',
      github: 'https://github.com/qwirlyx',
    };
  }
}