import { Field, ObjectType } from '@nestjs/graphql';
import { SkillType } from './skill.type.js';
import { ExperienceType } from './experience.type.js';
import { ProjectType } from './project.type.js';

@ObjectType()
export class Profile {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field({ nullable: true })
  github?: string;

  @Field({ nullable: true })
  telegram?: string;

  @Field(() => [SkillType])
  skills!: SkillType[];

  @Field(() => [ExperienceType])
  experience!: ExperienceType[];

  @Field(() => [ProjectType])
  projects!: ProjectType[];
}