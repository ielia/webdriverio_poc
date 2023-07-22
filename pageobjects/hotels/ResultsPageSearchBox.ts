import { $ } from '@wdio/globals';

import SearchBoxDesktopHorizontal from '../SearchBoxDesktopHorizontal';

export default class HeroBannerSearchBox extends SearchBoxDesktopHorizontal {
    protected get base() {
        return $('[data-capla-component="b-search-web-searchresults/SearchBoxDesktopHorizontal"]');
    }
};