import {QueryStore, Filter} from '../models';
import {IFilter, QueryStoreData} from '../types';
import {rawJson} from './raw';

export function and(
  querySt: QueryStore,
  value: ((filter: IFilter) => void) | any[],
) {
  const seed: QueryStoreData = [];
  const qs = new QueryStore(seed);
  if (!Array.isArray(value)) {
    const filter = new Filter(qs);
    value(filter);
  } else if (Array.isArray(value)) {
    for (const obj of value) {
      rawJson(qs, obj);
    }
  }
  querySt.add('$and', seed);
}

export function or(
  querySt: QueryStore,
  value: ((filter: IFilter) => void) | any[],
) {
  const seed: QueryStoreData = [];
  const qs = new QueryStore(seed);
  if (!Array.isArray(value)) {
    const filter = new Filter(qs);
    value(filter);
  } else if (Array.isArray(value)) {
    for (const obj of value) {
      rawJson(qs, obj);
    }
  }
  querySt.add('$or', seed);
}

export function nor(
  querySt: QueryStore,
  value: ((filter: IFilter) => void) | any[],
) {
  const seed: QueryStoreData = [];
  const qs = new QueryStore(seed);
  if (!Array.isArray(value)) {
    const filter = new Filter(qs);
    value(filter);
  } else if (Array.isArray(value)) {
    for (const obj of value) {
      rawJson(qs, obj);
    }
  }
  querySt.add('$nor', seed);
}

export function not(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$not: value});
}
