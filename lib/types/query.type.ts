import {KeyValue} from './base.type';
import {IFilter} from './filter.type';
import {SortOrder} from './option.type';

export interface IQuery {
  eq(path: string, value: any): IQuery;
  neq(path: string, value: any): IQuery;
  gt(path: string, value: any): IQuery;
  gte(path: string, value: any): IQuery;
  lt(path: string, value: any): IQuery;
  lte(path: string, value: any): IQuery;
  in(path: string, value: any[]): IQuery;
  nin(path: string, value: any[]): IQuery;

  all(path: string, value: any[]): IQuery;
  size(path: string, value: number): IQuery;

  exists(path: string, value?: boolean): IQuery;
  type(path: string, value: any): IQuery;

  regex(path: string, value: RegExp): IQuery;

  and(value: ((filter: IFilter) => void) | any[]): IQuery;
  or(value: ((filter: IFilter) => void) | any[]): IQuery;
  nor(value: ((filter: IFilter) => void) | any[]): IQuery;
  not(path: string, value: any): IQuery;

  limit(value: number): IQuery;
  offset(value: number): IQuery;
  select(value: string[], toSelect?: boolean): IQuery;
  sort(value: string[], order: SortOrder): IQuery;

  raw(...params: any[]): IQuery;
  rawJson(obj: any): IQuery;

  toQuery(): {filter: KeyValue; options: KeyValue};
  clear(): IQuery;
}
