import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Field, ID, Int, ObjectType} from "@nestjs/graphql";

export type ZipsDocument = Zip & Document;

@Schema()
@ObjectType()
export class Zip {
    @Prop()
    @Field(() => ID, {nullable: false})
    _id: string;

    @Prop()
    @Field(() => String, {nullable: true})
    city: string;

    @Prop()
    @Field(() => [String], {nullable: true})
    loc: String[];

    @Prop()
    @Field(() => Int, {nullable: true})
    pop: number;

    @Prop()
    @Field(() => String, {nullable: true})
    state: string
}

export const ZipSchema = SchemaFactory.createForClass(Zip);
