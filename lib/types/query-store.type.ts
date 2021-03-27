import {KeyValue} from './base.type';

export type QueryStoreData = KeyValue | KeyValue[];

export interface IQueryStore {
  add(key: string, value: any): void;
  clear(): void;
  toQuery(): any;
}
