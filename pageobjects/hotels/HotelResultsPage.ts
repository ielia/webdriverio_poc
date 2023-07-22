import { browser } from '@wdio/globals';

import ResultsPageSearchBox from './ResultsPageSearchBox';
import BookingPage from '../BookingPage';
import SearchBox from '../SearchBox';

class HotelResultsPage extends BookingPage<HotelResultsPage> {
    protected searchBoxObject: SearchBox = new ResultsPageSearchBox();

    protected DESTINATION_TITLE_LINK_SELECTOR: string = '[data-testid="property-card"] [data-testid="title-link"]';
    protected DESTINATION_TITLE_SELECTOR: string = '[data-testid="property-card"] [data-testid="title"]';

    public get searchBox(): SearchBox {
        return this.searchBoxObject;
    }

    public async awaitLoad(): Promise<HotelResultsPage> {
        await browser.waitUntil(async () => (await browser.getUrl() ?? '').indexOf('searchresults') > 0);
        return this;
    }
}

export default new HotelResultsPage();