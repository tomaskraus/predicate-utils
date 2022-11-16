import {not} from '../src/index';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';

const evenValueOnEvenIndex = (val: number, index: number) =>
  val % 2 === 0 && index % 2 === 0;

const src = from([1, 3, 5, 4, 6, 8]).pipe(filter(not(evenValueOnEvenIndex)));
const res: number[] = [];
src.subscribe(x => res.push(x));
console.log(res);
//=> [ 1, 3, 5, 4, 8 ]
