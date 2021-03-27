import {QueryStore} from '../models';

export function regex(querySt: QueryStore, path: string, value: any) {
  querySt.add(path, {$regex: value});
}
