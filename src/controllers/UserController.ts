import { Query, Mutation } from "recife";

import User, { UserModel } from "../models/UserModel";
import AddressModel from "../models/AddressModel";
import { UserForm, UserDelete } from "../inputs/UserInput";

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
  getUser(): boolean {
    // const user = new UserModel();
    // user.name = "Quaco Cainr";
    // user.email = "quacocainr@email.com";
    // user.username = "quacocainr";
    // user.address = this.addressDefault;

    return true;
  }

  @Mutation()
  createUser(input: UserForm): boolean {
    const user = new UserModel();
    user.name = input.name;
    user.email = input.email;
    user.username = input.username;
    // user.address = this.addressDefault;
    // console.log(user);
    User.create(user);

    return true;
  }

  // @Mutation()
  // updateUser(input: UserForm): boolean {
  //   const user = new UserModel();
  //   user.name = input.name;
  //   user.email = input.email;
  //   user.username = input.username;
  //   user.address = this.addressDefault;

  //   return true;
  // }

  // @Mutation()
  // deleteUser(input: UserDelete): boolean {
  //   return true;
  // }
}

export default UserController;
