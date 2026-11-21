import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type GuitarConfig = {
  shape: string;
  wood: string;
  neck: string;
  pickups: string;
  color: string;
  finish: string;
  notes: string;
};
export const initialConfig: GuitarConfig = {
  shape: "Классическая",
  wood: "Обсудить с мастером",
  neck: "Обсудить с мастером",
  pickups: "Обсудить с мастером",
  color: "#275343",
  finish: "Глянец",
  notes: "",
};
export const useConfig = create<{
  config: GuitarConfig;
  step: number;
  set: (key: keyof GuitarConfig, value: string) => void;
  go: (step: number) => void;
  reset: () => void;
}>()(
  persist(
    (set) => ({
      config: initialConfig,
      step: 0,
      set: (key, value) =>
        set((s) => ({ config: { ...s.config, [key]: value } })),
      go: (step) => set({ step: Math.max(0, Math.min(4, step)) }),
      reset: () => set({ config: initialConfig, step: 0 }),
    }),
    {
      name: "jm-guitars-config-v1",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      version: 1,
    },
  ),
);
export function specification(c: GuitarConfig) {
  return `JM GUITARS — пожелания к инструменту\n\nФорма: ${c.shape}\nМатериал корпуса: ${c.wood}\nГриф: ${c.neck}\nЗвукосниматели: ${c.pickups}\nЦвет: ${c.color}\nОтделка: ${c.finish}\nПожелания: ${c.notes || "Не указаны"}\n\nЭто предварительная спецификация. Возможность изготовления, комплектация, стоимость, сроки и условия оплаты согласуются с мастером.\n2D-превью условное: показывает форму, цвет и схему звукоснимателей.\n`;
}
