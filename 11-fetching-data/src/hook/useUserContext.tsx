import { UserContext } from "@/components/context/UserContext";
import { useContext } from "react";

export function useUserContext() {
  const context = useContext(UserContext);
  if(!context) throw new Error("useUserContext는 <UserContext> 안에서 사용해야 합니다.");
  return context;
}

// useContext 대신 use 를 사용해도 됨