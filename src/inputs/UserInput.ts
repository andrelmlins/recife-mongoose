export type UserCreateInput = {
  name: string;
  email: string;
  username: string;
};

export type UserUpdateInput = {
  id: string;
  name?: string;
  email?: string;
  username?: string;
};
