"use client";
// Adapted from MiniDev UI FormWizard, MIT: controlled steps, persistent state and domain-specific fields.
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ChoiceCard } from "@/components/ui/choice-card";
import { Stepper } from "@/components/ui/stepper";
import {
  useConfig,
  specification,
  type GuitarConfig,
} from "@/lib/config-store";
import { works } from "@/lib/catalog";
const Preview = dynamic(() => import("@/components/guitar-preview"), {
  ssr: false,
  loading: () => <div className="canvas-frame">Загрузка превью…</div>,
});
const steps = ["Форма", "Материалы", "Электроника", "Отделка", "Результат"];
export function FormWizard() {
  const { config, step, set, go, reset } = useConfig();
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    void useConfig.persist.rehydrate();
    const q = new URLSearchParams(window.location.search);
    const ref = works.find((w) => w.slug === q.get("reference"));
    if (ref && !useConfig.getState().config.notes.includes(ref.title))
      set(
        "notes",
        `Ориентир: ${ref.title}. ` + useConfig.getState().config.notes,
      );
    if (q.has("idea") || ref) go(0);
    queueMicrotask(() => setReady(true));
  }, [set, go]);
  function choices(key: keyof GuitarConfig, values: string[]) {
    return (
      <div className="config-choices">
        {values.map((v) => (
          <ChoiceCard
            key={v}
            title={v}
            selected={config[key] === v}
            aria-pressed={config[key] === v}
            onClick={() => set(key, v)}
          />
        ))}
      </div>
    );
  }
  function download() {
    const blob = new Blob([specification(config)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "JM-Guitars-specification.txt";
    a.click();
    URL.revokeObjectURL(url);
    setMessage(
      "Спецификация скачана. Её можно передать мастеру по согласованному каналу связи.",
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(specification(config));
      setMessage("Спецификация скопирована.");
    } catch {
      setMessage("Копирование недоступно. Скачайте спецификацию файлом.");
    }
  }
  if (!ready) return <p>Загрузка сохранённого проекта…</p>;
  return (
    <div data-slot="form-wizard" className="configurator">
      <Stepper steps={steps} current={step} className="config-stepper" />
      <div className="config-layout">
        <aside className="preview-panel">
          <Preview config={config} />
          <p>
            Условная схема, не чертёж. Превью показывает форму, цвет, схему
            звукоснимателей и блик отделки. Материал и профиль грифа в нём не
            моделируются.
          </p>
        </aside>
        <div className="config-panel">
          <p className="eyebrow">Шаг {step + 1} из 5</p>
          <h2>{steps[step]}</h2>
          {step === 0 && (
            <>
              <p>
                Выберите направление формы. Точные контуры согласуются с
                мастером.
              </p>
              {choices("shape", ["Классическая", "Асимметричная", "Своя идея"])}
              <label htmlFor="project-notes">Ваши пожелания</label>
              <textarea
                id="project-notes"
                value={config.notes}
                maxLength={3000}
                onChange={(e) => set("notes", e.target.value)}
                placeholder="Звук, эргономика, музыкальный стиль…"
              />
            </>
          )}
          {step === 1 && (
            <>
              <p>
                Пожелания к материалам. Доступность и сочетание подтверждает
                мастер.
              </p>
              <h3>Корпус</h3>
              {choices("wood", [
                "Обсудить с мастером",
                "Ясень",
                "Ольха",
                "Красное дерево",
              ])}
              <h3>Гриф</h3>
              {choices("neck", [
                "Обсудить с мастером",
                "Клён",
                "Красное дерево",
              ])}
            </>
          )}
          {step === 2 && (
            <>
              <p>
                Выберите ориентир для звука. Конкретные модели и схема
                подключения согласуются отдельно.
              </p>
              {choices("pickups", [
                "Обсудить с мастером",
                "Два сингла",
                "Два хамбакера",
                "Один звукосниматель",
              ])}
            </>
          )}
          {step === 3 && (
            <>
              <label htmlFor="body-color">Цвет корпуса</label>
              <div className="color-control">
                <input
                  id="body-color"
                  type="color"
                  value={config.color}
                  onChange={(e) => set("color", e.target.value)}
                />
                <span>{config.color}</span>
              </div>
              <h3>Отделка</h3>
              {choices("finish", ["Глянец", "Мат", "Релик"])}
              <p className="note">
                Экран не передаёт точный цвет, фактуру и характер релик-отделки.
                Образец согласуется отдельно.
              </p>
            </>
          )}
          {step === 4 && (
            <>
              <p>
                Ваш проект готов к обсуждению. Стоимость не рассчитана: её
                определяет мастер после согласования.
              </p>
              <pre className="specification">{specification(config)}</pre>
              <div className="actions">
                <button className="btn cream" onClick={download}>
                  Скачать спецификацию
                </button>
                <button className="btn light-outline" onClick={copy}>
                  Скопировать
                </button>
              </div>
              <p className="note">
                Контакты мастерской ещё не предоставлены. Спецификация
                сохраняется у вас; автоматической отправки нет.
              </p>
            </>
          )}
          <p role="status" className="status">
            {message}
          </p>
          <div className="wizard-navigation">
            <button
              className="btn light-outline"
              disabled={step === 0}
              onClick={() => {
                go(step - 1);
                setMessage("");
              }}
            >
              Назад
            </button>
            {step < 4 && (
              <button
                className="btn cream"
                onClick={() => {
                  go(step + 1);
                  setMessage("");
                }}
              >
                Далее →
              </button>
            )}
          </div>
          <p className="saved-note">Выбор сохраняется в этом браузере.</p>
          <button
            className="reset-link"
            onClick={() => {
              if (window.confirm("Сбросить все параметры проекта?")) {
                reset();
                setMessage("Проект сброшен.");
              }
            }}
          >
            Сбросить проект
          </button>
        </div>
      </div>
    </div>
  );
}
