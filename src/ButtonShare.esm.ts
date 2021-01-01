/**
 * Share button
 *
 * @version 1.0.1
 */
export default class ButtonShare extends HTMLButtonElement {
	#text: string | undefined;
	#title: string | undefined;
	#url: string | undefined;

	constructor() {
		super();

		this.type = 'button';

		if (navigator.share === undefined) {
			this.disabled = true;
		}
	}

	connectedCallback(): void {
		this.#text = this.dataset.shareText;
		this.#title = this.dataset.shareTitle;
		this.#url = this.dataset.shareUrl;

		this.addEventListener('click', this._clickEvent, { passive: true });
	}

	disconnectedCallback(): void {
		this.removeEventListener('click', this._clickEvent);
	}

	/**
	 * ボタン押下時の処理
	 */
	private async _clickEvent() {
		await navigator.share({
			// TODO files
			text: this.#text !== undefined ? this.#text : '',
			title: this.#title !== undefined ? this.#title : document.title,
			url: this.#url !== undefined ? this.#url : document.URL,
		});
	}
}
