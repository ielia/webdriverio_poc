import BookingPage from '../BookingPage';
import HeroBannerSearchBox from './HeroBannerSearchBox';

class HotelsHomePage extends BookingPage<HotelsHomePage> {
    protected searchBoxObject: HeroBannerSearchBox = new HeroBannerSearchBox();

    public async open() : Promise<HotelsHomePage> {
        await super.open('index.html');
        return this;
    }

    public get searchBox(): HeroBannerSearchBox {
        return this.searchBoxObject;
    }
}

export default new HotelsHomePage();