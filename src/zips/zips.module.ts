import {Module} from '@nestjs/common';
import {ZipsResolver} from './zips.resolver';
import {MongooseModule} from '@nestjs/mongoose';
import {Zip, ZipSchema} from './schemas/zips.schema';
import { ZipsService } from './zips.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Zip.name, schema: ZipSchema}])],
    providers: [ZipsResolver, ZipsService]
})
export class ZipsModule {
}
