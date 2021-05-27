import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

let handleCart = set => ({
  cart: {},
  addCart: (item) => set((state) => ({cart: {...state.cart, ...item}})),
});

handleCart = devtools(handleCart);
handleCart = persist(handleCart);

const useStore = create(handleCart);

export default useStore;
