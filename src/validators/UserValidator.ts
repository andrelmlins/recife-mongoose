import { UserInputError } from "apollo-server-core";
import { UserForm } from "../inputs/UserInput";

class UserValidator {
  createUser(input: UserForm) {
    if (!this.isEmailValid(input.email)) {
      throw new UserInputError("Email invalid");
    }
  }

  updateUser(input: UserForm) {
    if (input.email && !this.isEmailValid(input.email)) {
      throw new UserInputError("Email invalid");
    }
  }

  private isEmailValid(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}

export default UserValidator;
