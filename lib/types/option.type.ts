import {KeyValue} from './base.type';

export type SortOrder = 'asc' | 'desc';

export interface IOption {
  limit(value: number): IOption;
  offset(value: number): IOption;
  select(value: string[], toSelect?: boolean): IOption;
  sort(value: string[], order: SortOrder): IOption;

  raw(...params: any[]): IOption;
  rawJson(obj: any): IOption;

  toQuery(): KeyValue;
  clear(): IOption;
}
