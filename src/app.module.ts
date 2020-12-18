import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ZipsModule} from './zips/zips.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        GraphQLModule.forRoot({autoSchemaFile: 'schema.gql'}),
        MongooseModule.forRoot('mongodb://localhost:27017/test'),
        ZipsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
