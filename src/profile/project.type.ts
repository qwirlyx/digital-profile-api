import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Project')
export class ProjectType {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  role?: string;

  @Field({ nullable: true })
  stack?: string;

  @Field({ nullable: true })
  url?: string;
}