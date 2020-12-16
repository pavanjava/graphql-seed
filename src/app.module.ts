import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GraphQLModule.forRoot({autoSchemaFile:'schema.gql'}), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
