import {KeyValue} from './base.type';

export interface IFilter {
  eq(path: string, value: any): IFilter;
  neq(path: string, value: any): IFilter;
  gt(path: string, value: any): IFilter;
  gte(path: string, value: any): IFilter;
  lt(path: string, value: any): IFilter;
  lte(path: string, value: any): IFilter;
  in(path: string, value: any[]): IFilter;
  nin(path: string, value: any[]): IFilter;

  all(path: string, value: any[]): IFilter;
  size(path: string, value: number): IFilter;

  exists(path: string, value?: boolean): IFilter;
  type(path: string, value: any): IFilter;

  regex(path: string, value: RegExp): IFilter;

  and(value: ((filter: IFilter) => void) | any[]): IFilter;
  or(value: ((filter: IFilter) => void) | any[]): IFilter;
  nor(value: ((filter: IFilter) => void) | any[]): IFilter;
  not(path: string, value: any): IFilter;

  raw(...params: any[]): IFilter;
  rawJson(obj: any): IFilter;

  toQuery(): KeyValue;
  clear(): IFilter;
}
