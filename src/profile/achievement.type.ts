import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Achievement')
export class AchievementType {
  @Field()
  description!: string;
}