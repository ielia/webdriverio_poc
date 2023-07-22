import { After, Before, Given, Then, When } from '@wdio/cucumber-framework';
import { browser, expect } from '@wdio/globals';
import { addDays, startOfToday } from 'date-fns';

import BookingPage from '../pageobjects/BookingPage';
import HomePage from '../pageobjects/hotels/HotelsHomePage';

const pages: { [k: string]: BookingPage<any> } = {
    home: HomePage,
}

let currentPage: BookingPage<any>;

Before(async (scenario) => {
    console.log('<><><><><><><><><><> BEFORE <><><><><><><><><><>', scenario);
    console.log('Session ID:', browser.sessionId);
});

Given(/^I am on the (\w+) page$/, async (page: string): Promise<void> => {
    currentPage = pages[page];
    await currentPage.open();
});

Given(/^I have closed Genius sign in modal dialog$/, async (): Promise<void> => {
    try {
        await currentPage.geniusDialog.waitForAndClose();
    } catch (exception) {
        // TODO: Figure this one out.
    }
});

When(/^I select (\w[ ,\-\w]*\w) as the destination$/, async (destination: string): Promise<void> => {
    await currentPage.searchBox.setDestination(destination);
});

When(/^I select (\d+) days from today as my check-in date with a stay of (\d+) days$/, async (checkInFromToday: number, stayDays: number): Promise<void> => {
    const today: Date = startOfToday();
    const checkIn: Date = addDays(today, checkInFromToday);
    const checkOut: Date = addDays(checkIn, stayDays);
    await currentPage.searchBox.setDates(checkIn, checkOut);
});

When(/^I submit the search$/, async (): Promise<void> => {
    await currentPage.searchBox.submit();
});

Then(/^I can see destination (\w[ ,\-\w]*\w) on the results page title$/, async (destination: string): Promise<void> => {
    expect(await browser.getTitle()).toContain(destination);
});

After(async (scenario) => {
    console.log('<><><><><><><><><><> AFTER <><><><><><><><><><>', scenario);
    // await browser.reloadSession();
})
