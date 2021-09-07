import firebase from 'firebase';
export interface User {
  uid?: string;
  Nome: string;
  Email: string;
  Senha: string;
}

export type ExtendedUser = User & firebase.auth.AdditionalUserInfo;
