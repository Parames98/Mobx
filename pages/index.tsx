import {create} from "zustand";
import Home from "./_app";

type Store = {
  bears: number;
}

type Actions = {
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useStore = create<Store & Actions>((set) => ({
  bears: 0,
  increasePopulation: () => set((state:any) => ({ bears: state.bears + 5 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default Home;
