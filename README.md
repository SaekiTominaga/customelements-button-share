# Share button by Custom Elements.

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fcustomelements-button-share.svg)](https://badge.fury.io/js/%40saekitominaga%2Fcustomelements-button-share)

Share button using [Web Share API](https://www.w3.org/TR/web-share/) by Custom Elements.

## Demo

- [Demo page](https://saekitominaga.github.io/customelements-button-share/demo.html)

## Examples

```
<button type="button" is="x-share"
  data-share-text="Message text"
  data-share-title="Page title"
  data-share-url="/path/to"
>Share</button>
```

## Attributes

<dl>
<dt>type [optional]</dt>
<dd>This function automatically sets <code>type="button"</code>.
However, it is recommended to manually add <code>type="button"</code> for JavaScript disabled environments and browsers that do not <a href="https://caniuse.com/custom-elementsv1">support Customized built-in elements</a> (Safari 14, Edge Legacy, etc.). According to <a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type">the description in the HTML specification</a>, <q cite="https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type">The missing value default and invalid value default are the <a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-type-submit-state">Submit Button</a> state</q>.</dd>
<dt>data-share-text [optional]</dt>
<dd>Arbitrary text that forms the body of the message being shared. If omitted, it will be an empty string.</dd>
<dt>data-share-title [optional]</dt>
<dd>The title of the document being shared. May be ignored by the target. If omitted, the value of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/title">document.title</a> will be set.</dd>
<dt>data-share-url [optional]</dt>
<dd>A URL string referring to a resource being shared. The url can contain a relative-URL string. If omitted, the value of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/URL">document.URL</a> will be set.</dd>
</dl>
