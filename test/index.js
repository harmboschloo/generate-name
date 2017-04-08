import test from 'tape';
import converter from '../src';

const testRunner = (t, characters) => {
  const convert = converter(characters);
  return (number, expected) =>
    t.equal(
      convert(number),
      expected,
      `should turn ${number} into '${expected}'`
    );
}

test('test 3 character set (abc)', t => {
  const runTest = testRunner(t, 'abc');
  runTest(0, 'a');
  runTest(1, 'b');
  runTest(2, 'c');
  runTest(3, 'aa');
  runTest(4, 'ab');
  runTest(5, 'ac');
  runTest(6, 'ba');
  runTest(7, 'bb');
  runTest(8, 'bc');
  runTest(9, 'ca');
  runTest(10, 'cb');
  runTest(11, 'cc');
  runTest(12, 'aaa');
  runTest(13, 'aab');
  runTest(14, 'aac');
  runTest(15, 'aba');
  runTest(16, 'abb');
  runTest(17, 'abc');
  runTest(18, 'aca');
  runTest(19, 'acb');
  runTest(20, 'acc');
  runTest(21, 'baa');
  runTest(22, 'bab');
  runTest(23, 'bac');
  runTest(24, 'bba');
  t.end();
});

test('test 1 character set (a)', t => {
  const runTest = testRunner(t, 'a');
  runTest(0, 'a');
  runTest(1, 'aa');
  runTest(2, 'aaa');
  runTest(3, 'aaaa');
  runTest(4, 'aaaaa');
  t.end();
});

test('test negative number on 3 character set (abc)', t => {
  const runTest = testRunner(t, 'abc');
  runTest(-1, '');
  t.end();
});

test('test floating numbers on 3 character set (abc)', t => {
  const runTest = testRunner(t, 'abc');
  runTest(0.5, 'a');
  runTest(1.3, 'b');
  runTest(2.99999999999, 'c');
  runTest(3.00000000001, 'aa');
  t.end();
});

test('test 10 character set of numbers (0123456789)', t => {
  const runTest = testRunner(t, '0123456789');
  runTest(0, '0');
  runTest(1, '1');
  runTest(2, '2');
  runTest(3, '3');
  runTest(4, '4');
  runTest(5, '5');
  runTest(6, '6');
  runTest(7, '7');
  runTest(8, '8');
  runTest(9, '9');
  runTest(10, '00');
  runTest(11, '01');
  runTest(12, '02');
  runTest(13, '03');
  runTest(14, '04');
  runTest(15, '05');
  runTest(16, '06');
  runTest(17, '07');
  runTest(18, '08');
  runTest(19, '09');
  runTest(20, '10');
  runTest(21, '11');
  runTest(22, '12');
  runTest(99, '89');
  runTest(100, '90');
  t.end();
});

test('test big numbers on 52 character set (a-zA-Z)', t => {
  const runTest = testRunner(
    t,
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  );
  runTest(4294967294, 'kouIxU');
  runTest(4294967295, 'kouIxV');
  runTest(4294967296, 'kouIxW');
  runTest(858993458, 'bmygdY');
  runTest(858993459, 'bmygdZ');
  runTest(858993460, 'bmygea');
  runTest(900719925474098, 'pRfADMvtc');
  runTest(900719925474099, 'pRfADMvtd');
  runTest(900719925474100, 'pRfADMvte');
  runTest(9007199254740990, 'clymoUDoRE');
  runTest(9007199254740991, 'clymoUDoRF');
  runTest(9007199254740992, 'clymoUDoRG');
  t.end();
});

test('test Number.MIN/MAX values on 52 character set (a-zA-Z)', t => {
  const runTest = testRunner(
    t,
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  );
  runTest(Number.MAX_SAFE_INTEGER, 'clymoUDoRF');
  runTest(Number.MAX_VALUE, 'loUvEjnDUCSGCiiOeGiWOaKGSymWquKKimeueaqCuWKOKSCyaiymmiyWqSeyGWWiyymKSGqmiWySiCiKSmGuaiOSWiGaCGqSiSeKKeOuSqOSOqCWCCuyySOeGKGyeuqOiqKGCyyOyyCqimuqqeiGymOuuKCKyaSyyqqmGauiqeimSKiauCqW');
  runTest(Number.MIN_SAFE_INTEGER, '');
  runTest(Number.MIN_VALUE, 'a');
  t.end();
});
