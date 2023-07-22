import { $ } from '@wdio/globals';

export default class ModalDialog {
    protected CLOSE_TIMEOUT_MILLIS: number = 1000;

    protected get base() {
        return $('[role="dialog"][aria-modal="true"]');
    }

    protected get closeButton() {
        return this.base.$('div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > button');
    }

    protected async waitForAndClose(millis :number): Promise<void> {
        await this.closeButton.waitForClickable({ timeout: millis });
        await this.closeButton.click();
        // TODO: Figure this out
        // await browser.waitUntil(() => !this.base.isExisting(), { timeout: this.CLOSE_TIMEOUT_MILLIS });
    }
};