declare const top: "top"
declare const bottom: "bottom"
declare const right: "right"
declare const left: "left"
declare type BasePlacement =
  | typeof top
  | typeof bottom
  | typeof right
  | typeof left
declare type VariationPlacement =
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "right-start"
  | "right-end"
  | "left-start"
  | "left-end"
declare type AutoPlacement = "auto" | "auto-start" | "auto-end"
export declare type Placement =
  | AutoPlacement
  | BasePlacement
  | VariationPlacement
