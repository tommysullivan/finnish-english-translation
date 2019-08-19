import { expectChar } from './expectChar';
export const expectConsonant = (char:string) => expectChar(char).toBeFalsy();
