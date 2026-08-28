import { Field, ObjectType } from '@nestjs/graphql';
import { AchievementType } from './achievement.type.js';

@ObjectType('Experience')
export class ExperienceType {
  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field()
  period!: string;

  @Field(() => [AchievementType])
  achievements!: AchievementType[];
}