import { User } from "./user.ts";

const mockUsers: User[] = [
  { name: "Taro", age: 18 },
  { name: "Hanako", age: 24 },
  { name: "Yuki", age: 31 },
];

export class UserRepository {
  private users: Map<number, User>;

  constructor() {
    this.users = new Map<number, User>();
    mockUsers.forEach((user, i) => {
      this.users.set(i, user);
    });
  }

  all() {
    return Array.from(this.users.values());
  }

  find(id: number) {
    return this.users.get(id);
  }
}
