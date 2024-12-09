import React from "react";

export function isJson<T extends any>(obj: T): boolean {
  return typeof obj === "object" && obj !== null && obj.constructor === Object;
}

export function isReactNode<T extends any>(obj: T): boolean {
  return React.isValidElement(obj);
}
