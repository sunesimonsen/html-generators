# html-generators

[![Build Status](https://travis-ci.org/sunesimonsen/html-generators.svg?branch=master)](https://travis-ci.org/sunesimonsen/html-generators)

[![Coverage Status](https://coveralls.io/repos/github/sunesimonsen/html-generators/badge.svg?branch=master)](https://coveralls.io/github/sunesimonsen/html-generators?branch=master)

HTML generator based on [chance-generators](https://github.com/sunesimonsen/chance-generators/), intended for use in property based tests with [unexpected-check](https://unexpected.js.org/unexpected-check/) or [unchecked](https://github.com/unexpectedjs/unchecked).

```js
const { htmlString } = require("html-generators");

console.log(htmlString.first());
```

```html
<html tabindex="-233" lang="T"><head contenteditable="false"><title contenteditable="false"></title><link integrity="bhrYrGYj" href="cm^CtnX3xF"></link></head><body draggable="true"></body></html>
```

## Example with unexpected-check

Check that
[html-minifier](https://github.com/kangax/html-minifier) always produces shorter
output:

```js
const htmlMinifier = require("html-minifier");
const { htmlString } = require("html-generators");
const expect = require("unexpected")
  .clone()
  .use(require("unexpected-check"));

expect.addAssertion(
  "<string> to be shorter than <string>",
  (expect, subject, value) => {
    expect(subject.length, "to be less than", value.length);
  }
);

describe("html-minifier", function() {
  it("should always produce a shorter string", function() {
    expect(
      html => {
        expect(
          htmlMinifier.minify(html, {
            removeEmptyAttributes: true,
            removeAttributeQuotes: true
          }),
          "to be shorter than",
          html
        );
      },
      "to be valid for all",
      htmlString
    );
  });
});
```
