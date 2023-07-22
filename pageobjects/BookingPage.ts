import { browser } from '@wdio/globals';

import GeniusSignInModalDialog from './GeniusSignInModalDialog';
import SearchBox from './SearchBox';

export default abstract class BookingPage<P extends BookingPage<P>> {
    protected geniusDialogObject: GeniusSignInModalDialog = new GeniusSignInModalDialog();

    public get geniusDialog(): GeniusSignInModalDialog {
        return this.geniusDialogObject;
    }

    public abstract get searchBox(): SearchBox;

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public async open(path: string = ''): Promise<P> {
        await browser.url(`https://www.booking.com/${path}`);
        return (this as unknown) as P;
    }
};