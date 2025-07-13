import { createContext, useContext } from "react";
import { type Contact } from "../types";

export const ContactContext = createContext<Contact | null>(null);

export const useContactData = () => {
  return useContext(ContactContext);
};
