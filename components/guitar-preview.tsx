"use client";
import { Stage, Layer, Path, Rect, Line, Circle, Text } from "react-konva";
import type { GuitarConfig } from "@/lib/config-store";
const paths = {
  classic:
    "M130 200 C95 170 78 205 90 250 C100 275 70 295 70 340 C70 420 230 420 230 340 C230 290 200 275 212 250 C235 190 205 175 180 200 L170 245 L140 245 Z",
  offset:
    "M130 205 C95 155 75 195 86 250 L55 355 C45 390 185 440 220 385 C245 350 210 300 220 275 C235 220 205 185 180 210 L170 245 L140 245 Z",
};
export default function GuitarPreview({ config }: { config: GuitarConfig }) {
  const hum = config.pickups === "Два хамбакера";
  return (
    <div
      className="canvas-frame"
      role="img"
      aria-label={`Условное 2D-превью: ${config.shape}, цвет ${config.color}, ${config.pickups}`}
    >
      <Stage width={300} height={470}>
        <Layer>
          <Text
            text="JM / КОНЦЕПЦИЯ"
            x={20}
            y={20}
            fill="#8f887d"
            fontSize={12}
          />
          <Path
            data={
              config.shape === "Асимметричная" ? paths.offset : paths.classic
            }
            fill={config.color}
            stroke="#222"
            strokeWidth={2}
          />
          <Rect
            x={141}
            y={72}
            width={28}
            height={230}
            fill="#74503a"
            stroke="#b29168"
          />
          <Path
            data="M141 75 L137 42 Q138 34 150 35 L178 40 L169 75 Z"
            fill={config.color}
            stroke="#444"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Circle key={i} x={140 + i * 6} y={38 + i} radius={3} fill="#ddd" />
          ))}
          {Array.from({ length: 19 }, (_, i) => (
            <Line
              key={i}
              points={[141, 90 + i * 10, 169, 90 + i * 10]}
              stroke="#b6aea5"
              strokeWidth={1}
            />
          ))}
          {config.pickups !== "Один звукосниматель" && (
            <Rect
              x={130}
              y={311}
              width={50}
              height={hum ? 23 : 10}
              cornerRadius={3}
              fill="#d6d2c9"
              stroke="#333"
            />
          )}
          <Rect
            x={130}
            y={config.pickups === "Один звукосниматель" ? 324 : 277}
            width={50}
            height={hum ? 23 : 10}
            cornerRadius={3}
            fill="#d6d2c9"
            stroke="#333"
          />
          <Rect
            x={131}
            y={354}
            width={48}
            height={23}
            fill="#bbb"
            stroke="#555"
          />
          {Array.from({ length: 6 }, (_, i) => (
            <Line
              key={i}
              points={[146 + i * 3.4, 46, 146 + i * 3.4, 375]}
              stroke="#e8e5da"
              strokeWidth={0.7}
            />
          ))}
          <Circle x={197} y={335} radius={7} fill="#222" stroke="#ccc" />
          <Circle x={205} y={359} radius={7} fill="#222" stroke="#ccc" />
          {config.finish === "Глянец" && (
            <Path
              data="M104 295 Q80 340 104 368"
              stroke="rgba(255,255,255,.5)"
              strokeWidth={4}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}
