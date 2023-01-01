import create from "zustand";
import { devtools } from "zustand/middleware";
import { useCounter, ZustandDevtools } from ".";

type State = {
  count: number;
};

type Action = {
  inc: () => void;
  dec: () => void;
};

export const useCount = create<State & Action, ZustandDevtools>(
  devtools(function (set) {
    return {
      count: 0,
      inc() {
        const counterValue = useCounter.getState().count;
        set((val) => ({ count: val.count + counterValue }), false, "inc");
      },
      dec() {
        const counterValue = useCounter().count;
        set((val) => ({ count: val.count - counterValue }), false, "dec");
      },
    };
  })
);
