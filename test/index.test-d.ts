import { expectType } from 'tsd';
import cnname from '../src';

expectType<string>(cnname());
expectType<string>(cnname('张'));
expectType<string[]>(cnname(10));
expectType<string[]>(cnname('张', 10));
