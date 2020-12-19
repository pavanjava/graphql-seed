import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Zip, ZipsDocument} from "./schemas/zips.schema";
import {Model} from "mongoose";
import {ZipsDto} from "./dto/zips.dto";
import * as CryptoJS from 'crypto';

@Injectable()
export class ZipsService {
    constructor(@InjectModel(Zip.name) private readonly zipModel: Model<ZipsDocument>) {
    }

    findOne = async (id: string): Promise<ZipsDocument> => {
        return this.zipModel.findById(id).exec();
    }

    findAll = async (): Promise<ZipsDocument[]> => {
        return this.zipModel.find().exec();
    }

    createZip = async (createZipDto: ZipsDto): Promise<ZipsDocument> => {
        const createdZip: ZipsDocument = new this.zipModel(createZipDto);
        createdZip._id = CryptoJS.createHash('MD5').update(createdZip.state+'-'+createdZip.city+'-'+createdZip.pop).digest('hex');
        return await createdZip.save();
    }

    updateZip = async (id: string, createZipDto: ZipsDto): Promise<boolean> => {
        const updatedEntity = await this.zipModel.updateOne({_id: id}, createZipDto).exec();
        return updatedEntity.ok === 1 && updatedEntity.n >= 1;
    }
}
