import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './profile/profile.module';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ApolloServerPluginLandingPageLocalDefault } = require(
  '@apollo/server/plugin/landingPage/default',
);

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProfileModule,
  ],
})
export class AppModule {}