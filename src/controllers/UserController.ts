import { Query, Mutation } from "recife";

import User, { UserModel } from "../models/UserModel";
import AddressModel from "../models/AddressModel";
import { UserCreateInput, UserUpdateInput } from "../inputs/UserInput";

class UserController {
  addressDefault: AddressModel;

  constructor() {
    this.addressDefault = new AddressModel(
      "Av. Alfredo Lisboa",
      "Recife",
      "Pernambuco",
      "50020360"
    );
  }

  @Query()
  async listUsers(): Promise<UserModel[]> {
    return await User.find({}).exec();
  }

  @Mutation()
  async createUser(input: UserCreateInput): Promise<UserModel> {
    return await User.create({
      name: input.name,
      email: input.email,
      username: input.username
    });
  }

  @Mutation()
  async updateUser(input: UserUpdateInput): Promise<UserModel> {
    const user = await User.findById(input.id);
    user.name = input.name || user.name;
    user.email = input.email || user.email;
    user.username = input.username || user.username;

    return user.save();
  }

  @Mutation()
  async deleteUser(input: { id: string }): Promise<boolean> {
    const user = await User.findOneAndRemove({ _id: input.id }).exec();
    return !!user;
  }
}

export default UserController;
