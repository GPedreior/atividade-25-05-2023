import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    email?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
}>> & Omit<mongoose.FlatRecord<{
    name?: string;
    age?: number;
    email?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
