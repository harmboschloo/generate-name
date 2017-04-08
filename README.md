# hash-to-string

Converts an unsigned number into a string given a set of characters.

## install

```
npm install hash-to-string --save
```

## example

```
import createToString from 'hash-to-string';

const toAbcString = createToString('abc');

toAbcString(0); // 'a'
toAbcString(1); // 'b'
toAbcString(2); // 'c'
toAbcString(3); // 'aa'
toAbcString(4); // 'ab'
toAbcString(5); // 'ac'
toAbcString(6); // 'ba'
toAbcString(7); // 'bb'
toAbcString(8); // 'bc'
toAbcString(9); // 'ca'
toAbcString(10); // 'cb'
toAbcString(11); // 'cc'
toAbcString(12); // 'aaa'
toAbcString(13); // 'aab'
toAbcString(14); // 'aac'
toAbcString(15); // 'aba'

const toAlphabeticString = createToString('abcdefghijklmnopqrstuvwxyz');

toAlphabeticString(1234567890); // 'cywoqvk'
toAlphabeticString(9876501234); // 'aeyfsbxc'

const toNumberString = createToString('0123456789');

toNumberString(0); // '0'
toNumberString(1); // '1'
toNumberString(2); // '2'
toNumberString(3); // '3'
toNumberString(4); // '4'
toNumberString(5); // '5'
toNumberString(6); // '6'
toNumberString(7); // '7'
toNumberString(8); // '8'
toNumberString(9); // '9'
toNumberString(10); // '00'
toNumberString(11); // '01'
toNumberString(12); // '02'
toNumberString(13); // '03'
toNumberString(14); // '04'
toNumberString(15); // '05'
toNumberString(16); // '06'
toNumberString(17); // '07'
toNumberString(18); // '08'
toNumberString(19); // '09'
toNumberString(20); // '10'
toNumberString(21); // '11'
toNumberString(22); // '12'
toNumberString(99); // '89'
toNumberString(100); // '90'

const toAString = createToString('a');

toAString(0); // 'a'
toAString(1); // 'aa'
toAString(2); // 'aaa'
toAString(3); // 'aaaa'
toAString(4); // 'aaaaa'

// negative number

toAString(-1); // ''
```

## license

MIT
