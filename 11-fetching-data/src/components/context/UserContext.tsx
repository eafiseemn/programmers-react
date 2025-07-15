import { createContext } from "react";

interface UserContextType {
  username: string;
}

export const UserContext = createContext<UserContextType | null>(null);
