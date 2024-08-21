import { ContextFilter } from "@/contexts/contextFilter";
import { useContext } from "react";

export function useFilter(){
  return useContext(ContextFilter)
}