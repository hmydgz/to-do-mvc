import { FC, ReactNode } from "react";

export type FCC<T extends ReactNode = ReactNode> = FC<{ children: T }>

export type Key = string | number

export type TupleToUnion<T extends unknown[]> = T[number];

/**
 * @example
 * ```
 * // 用于reduce函数的类型声明
 * // 等于 { type: AppStateActionTypeEnum.SET_LEFT_LIST_TYPE, data: AppActiveListTypeEnum } | { type: AppStateActionTypeEnum.TOGGLE_THEME }
 * type AllAction = BaseActionMap<[
 *   [AppStateActionTypeEnum.SET_LEFT_LIST_TYPE, AppActiveListTypeEnum],
 *   [AppStateActionTypeEnum.TOGGLE_THEME],
 * ]>
 * ```
 */
export type BaseActionTuple<T extends Array<[Key, unknown] | [Key]>> = TupleToUnion<{
  [K in keyof T]: T[K] extends [Key, unknown]
    ? { type: T[K][0], data: T[K][1] }
    : { type: T[K][0] }
}>