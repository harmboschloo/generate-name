import test from 'tape';
import nameGenerator from '../src';

const testRunner = (t, characters) => {
  const generateName = nameGenerator(characters);
  return (number, expected) =>
    t.equal(
      generateName(number),
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
  runTest(4, 'ba');
  runTest(5, 'ca');
  runTest(6, 'ab');
  runTest(7, 'bb');
  runTest(8, 'cb');
  runTest(9, 'ac');
  runTest(10, 'bc');
  runTest(11, 'cc');
  runTest(12, 'aaa');
  runTest(13, 'baa');
  runTest(14, 'caa');
  runTest(15, 'aba');
  runTest(16, 'bba');
  runTest(17, 'cba');
  runTest(18, 'aca');
  runTest(19, 'bca');
  runTest(20, 'cca');
  runTest(21, 'aab');
  runTest(22, 'bab');
  runTest(23, 'cab');
  runTest(24, 'abb');
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

test('test big numbers on 52 character set (a-zA-Z)', t => {
  const runTest = testRunner(
    t,
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  );
  runTest(4294967294, 'UxIuok');
  runTest(4294967295, 'VxIuok');
  runTest(4294967296, 'WxIuok');
  runTest(858993458, 'Ydgymb');
  runTest(858993459, 'Zdgymb');
  runTest(858993460, 'aegymb');
  runTest(900719925474098, 'ctvMDAfRp');
  runTest(900719925474099, 'dtvMDAfRp');
  runTest(900719925474100, 'etvMDAfRp');
  runTest(9007199254740990, 'ERoDUomylc');
  runTest(9007199254740991, 'FRoDUomylc');
  runTest(9007199254740992, 'GRoDUomylc');
  t.end();
});

test('test Number.MIN/MAX values on 52 character set (a-zA-Z)', t => {
  const runTest = testRunner(
    t,
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  );
  runTest(Number.MAX_SAFE_INTEGER, 'FRoDUomylc');
  runTest(Number.MAX_VALUE, 'WqCuaiKSmieqiuaGmqqyySayKCKuuOmyGieqqumiqCyyOyyCGKqiOqueyGKGeOSyyuCCWCqOSOqSuOeKKeSiSqGCaGiWSOiauGmSKiCiSyWimqGSKmyyiWWGyeSqWyimmyiayCSKOKWuCqaeuemiKKuqWmySGKaOWiGeOiiCGSCUDnjEvUol');
  runTest(Number.MIN_SAFE_INTEGER, '');
  runTest(Number.MIN_VALUE, 'a');
  t.end();
});
