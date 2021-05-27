import create from 'zustand';
import {persist} from 'zustand/middleware';

let handleCart = set => ({
  cart: {},
  addCart: (item) => set((state) => ({cart: {...state.cart, ...item}})),
});

let handleUser = set => ({
  user: null,
  addUser: (user) => set((state) => ({user: {...state.user, ...user}})),
});

handleCart = persist(handleCart);
handleUser = persist(handleUser)

export const useCart = create(handleCart);
export const useUser = create(handleUser)

