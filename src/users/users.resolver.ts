import {Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
    @Query(() => String)
    async greet(){
        return 'Hello';
    }
}
