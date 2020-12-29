var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _text, _title, _url;
/**
 * Share button
 *
 * @version 1.0.0
 */
export default class ShareButton extends HTMLButtonElement {
    constructor() {
        super();
        _text.set(this, void 0);
        _title.set(this, void 0);
        _url.set(this, void 0);
        this.type = 'button';
        if (navigator.share === undefined) {
            this.disabled = true;
        }
    }
    connectedCallback() {
        __classPrivateFieldSet(this, _text, this.dataset.shareText);
        __classPrivateFieldSet(this, _title, this.dataset.shareTitle);
        __classPrivateFieldSet(this, _url, this.dataset.shareUrl);
        this.addEventListener('click', this._clickEvent, { passive: true });
    }
    disconnectedCallback() {
        this.removeEventListener('click', this._clickEvent);
    }
    /**
     * ボタン押下時の処理
     */
    async _clickEvent() {
        await navigator.share({
            // TODO files
            text: __classPrivateFieldGet(this, _text) !== undefined ? __classPrivateFieldGet(this, _text) : '',
            title: __classPrivateFieldGet(this, _title) !== undefined ? __classPrivateFieldGet(this, _title) : document.title,
            url: __classPrivateFieldGet(this, _url) !== undefined ? __classPrivateFieldGet(this, _url) : document.URL,
        });
    }
}
_text = new WeakMap(), _title = new WeakMap(), _url = new WeakMap();
