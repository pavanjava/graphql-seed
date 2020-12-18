import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ZipsService} from "./zips.service";
import {Zip, ZipSchema, ZipsDocument} from "./schemas/zips.schema";
import {ZipsDto} from "./dto/zips.dto";

@Resolver()
export class ZipsResolver {

    constructor(private readonly zipService: ZipsService) {
    }

    @Query(() => [Zip], {name:''})
    async findAll(): Promise<ZipsDocument[]>{
        return this.zipService.findAll();
    }

    @Mutation(() => Zip)
    async createZip(@Args('data') data: ZipsDto): Promise<ZipsDocument> {
        return this.zipService.createZip(data);
    }
}
