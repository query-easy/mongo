import {QueryStore} from '../models';

export function eq(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$eq: value});
}

export function neq(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$ne: value});
}

export function gt(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$gt: value});
}

export function gte(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$gte: value});
}

export function lt(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$lt: value});
}

export function lte(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$lte: value});
}

/**
 * `in` is a reserved keyword hence `inQ`
 */
export function inQ(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$in: value});
}

export function nin(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$nin: value});
}
