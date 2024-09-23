import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const keyProps: object = {
    index: true,
    required: true,
};

@Schema()
export class User extends Document {
    @Prop({ ...keyProps, unique: true, })
    email: string;
    @Prop(keyProps)
    fullName: string;
    @Prop({ ...keyProps, default: true })
    isActive: boolean;
    @Prop(keyProps)
    password: string;
    @Prop({ ...keyProps, default: ['user'] })
    roles: string[]; // user, admin
}

export const UserSchema = SchemaFactory.createForClass(User);