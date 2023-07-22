export default interface SearchBox {
    getDestination(): Promise<string>;
    setDates(checkIn: Date, checkOut: Date) : Promise<SearchBox>;
    setDestination(dest: string) : Promise<SearchBox>;
    submit() : Promise<SearchBox>;
};