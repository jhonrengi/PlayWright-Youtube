export interface IYoutube{
    goto(): Promise<void>;
    fillOnPlaceholder(song:string): Promise<void>;
    clickOnBotonSearch(): Promise<void>;
    selectRamdonMusic(): Promise<void>;
}