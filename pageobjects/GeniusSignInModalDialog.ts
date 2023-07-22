import ModalDialog from './ModalDialog';

export default class GeniusSignInModalDialog extends ModalDialog {
    protected OPEN_TIMEOUT_MILLIS:number = 10000;

    public async waitForAndClose(): Promise<void> {
        await super.waitForAndClose(this.OPEN_TIMEOUT_MILLIS);
    }
};