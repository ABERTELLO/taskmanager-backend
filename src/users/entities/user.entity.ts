// Dependencies
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Common
import { UserRoles } from 'src/common/interfaces';


const keyProps = {
    index: true,
    required: true,
};

@Schema()
export class User extends Document {
    @Prop({ ...keyProps, unique: true, })
    email: string;
    @Prop(keyProps)
    fullName: string;
    @Prop({ ...keyProps, default: false })
    isActive: boolean;
    @Prop(keyProps)
    password: string;
    @Prop({ ...keyProps, default: false })
    rememberMe: boolean;
    @Prop({ ...keyProps, default: UserRoles.user })
    role: UserRoles;
};

export const UserSchema = SchemaFactory.createForClass(User);