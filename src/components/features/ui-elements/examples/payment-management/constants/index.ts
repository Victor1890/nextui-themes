import { ChipProps } from "@nextui-org/react";

export const INITIAL_VISIBLE_COLUMNS = ["name"];

export const STATUS_COLOR_MAP: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
