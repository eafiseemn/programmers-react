import type { Address, Company } from "./Users";

declare global {
  type User = {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
  }
}
