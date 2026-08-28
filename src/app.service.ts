import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo() {
    return {
      name: 'Digital Profile API',
      status: 'ok',
      description: 'GraphQL API with developer profile data',
      graphql: '/graphql',
      database: 'PostgreSQL',
    };
  }
}