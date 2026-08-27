import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Skill')
export class SkillType {
  @Field()
  name!: string;
}