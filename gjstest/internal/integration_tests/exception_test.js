// Copyright 2010 Google Inc. All Rights Reserved.
// Author: jacobsa@google.com (Aaron Jacobs)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// A test file that intentionally raises an exception during a test function,
// for use by integration_test.cc.

function ExceptionTest() {}
gjstest.registerTestSuite(ExceptionTest);

ExceptionTest.prototype.referenceError = function() {
  // This test is not configured to put gjstest functions in the global
  // namespace, so the following should throw a reference error.
  equals(2);
};

ExceptionTest.prototype.notAFunctionError = function() {
  var foo = {};
  foo();
};

ExceptionTest.prototype.errorInMatcherFactory = function() {
  gjstest.isNearNumber('asd', 17);
};

ExceptionTest.prototype.stackOverflow = function() {
  function foo() { foo(); }
  foo();
};

ExceptionTest.prototype.passingTest = function() {
};

// A test constructor that throws an error.
function ThrowingConstructorTest() {
  throw new Error('taco');
}
gjstest.registerTestSuite(ThrowingConstructorTest);

ThrowingConstructorTest.prototype.someTest = function() {
};
