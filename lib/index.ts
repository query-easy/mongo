import {Query} from './models';

export default function query(collection: string) {
  return new Query(collection);
}
