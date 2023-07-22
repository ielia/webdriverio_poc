import { browser } from '@wdio/globals';
import { formatISO } from 'date-fns';
import { ChainablePromiseArray, ChainablePromiseElement, Element, ElementArray } from 'webdriverio/build/types';

import SearchBox from './SearchBox';

export default abstract class SearchBoxDesktopHorizontal implements SearchBox {
    protected abstract get base(): ChainablePromiseElement<Element>;

    public async getDestination(): Promise<string> {
        return await this.destinationInput.getValue();
    }

    public async setDates(checkIn: Date, checkOut: Date): Promise<SearchBox> {
        if (!await this.datePickerContainer.isDisplayed()) {
            await this.datesContainer.click();
        }
        await this.base.$(`[data-date="${this.formatDataDate(checkIn)}"]`).click();
        await this.base.$(`[data-date="${this.formatDataDate(checkOut)}"]`).click();
        return this as SearchBox;
    }

    public async setDestination(destination: string): Promise<SearchBox> {
        await this.destinationInput.click();
        if (await this.destinationClearButton.isDisplayed()) {
            await this.destinationClearButton.click();
        }
        for (const key of destination.split('')) {
            await browser.keys(key);
        }
        await browser.waitUntil(
            async (): Promise<boolean> =>
                await this.destinationAutocompleteResults[0].isClickable() &&
                (await this.destinationAutocompleteResults[0].getText()).indexOf(destination) >= 0,
            { timeout: 2000 }
        );
        await this.destinationAutocompleteResults[0].click();
        await browser.waitUntil(async (): Promise<boolean> => await this.destinationAutocompleteResults.length === 0);
        return this as SearchBox;
    }

    public async submit(): Promise<SearchBox> {
        await this.base.$('[type="submit"]').click();
        return this as SearchBox;
    }

    protected get datePickerContainer(): ChainablePromiseElement<Element> {
        return this.base.$('[data-testid="datepicker-tabs"]');
    }

    protected get datesContainer(): ChainablePromiseElement<Element> {
        return this.base.$('[data-testid="searchbox-dates-container"]');
    }

    protected get destinationClearButton(): ChainablePromiseElement<Element> {
        return this.base.$('[name="ss"] ~ div span[data-testid="input-clear"]');
    }

    protected get destinationInput(): ChainablePromiseElement<Element> {
        return this.base.$('[name="ss"]');
    }

    protected get destinationAutocompleteResults(): ChainablePromiseArray<ElementArray> {
        return this.base.$$('[data-testid="autocomplete-results"] li');
    }

    protected get submitButton(): ChainablePromiseElement<Element> {
        return this.base.$('[type="submit"]');
    }

    protected formatDataDate(date: Date): string {
        return formatISO(date, { representation: 'date' });
    }
};