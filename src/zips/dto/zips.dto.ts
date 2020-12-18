import {Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class ZipsDto {

    @Field(() => String, {nullable: true})
    city: string;

    @Field(() => [String], {nullable: true})
    loc: String[];

    @Field(() => Int, {nullable: true})
    pop: number;

    @Field(() => String, {nullable: true})
    state: string
}
