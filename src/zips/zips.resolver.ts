import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ZipsService} from "./zips.service";
import {Zip, ZipsDocument} from "./schemas/zips.schema";
import {ZipsDto} from "./dto/zips.dto";

@Resolver()
export class ZipsResolver {

    constructor(private readonly zipService: ZipsService) {
    }

    @Query(() => [Zip], {nullable: true, name: 'zips'})
    async findAll(): Promise<ZipsDocument[]> {
        return this.zipService.findAll();
    }

    @Mutation(() => Zip, {name:'zip'})
    async createZip(@Args('data') data: ZipsDto): Promise<ZipsDocument> {
        return this.zipService.createZip(data);
    }

    @Query(() => Zip, {nullable: true, name:'zip'})
    async findById(@Args('id') id: string): Promise<ZipsDocument> {
        return this.zipService.findOne(id);
    }

    @Mutation(() => Boolean)
    async updateZip(@Args('id') id: string, @Args('data') data: ZipsDto): Promise<boolean> {
        return await this.zipService.updateZip(id, data);
    }
}
