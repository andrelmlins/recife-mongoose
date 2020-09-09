import { Type } from "recife";
import { Document, Schema, model } from "mongoose";
// import AddressModel from "./AddressModel";

@Type()
export class UserModel extends Document {
  id: string;
  name?: string;
  email?: string;
  username?: string;
}

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  username: String
});

export default model<UserModel>("User", UserSchema);
