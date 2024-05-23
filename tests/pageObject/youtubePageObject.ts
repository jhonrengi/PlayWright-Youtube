import { expect, Page } from "@playwright/test";
import {IYoutube} from '../interfaces/YoutubeUI';
import { canciones } from "../data/NameSong";

export class youtubePage implements IYoutube{

    private page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.youtube.com/');
    }

    async fillOnPlaceholder(name:string): Promise<void> {
        await this.page.click('input#search');
        await this.page.getByPlaceholder('Search').fill(name);
    }

    async clickOnBotonSearch(): Promise<void> {
        await this.page.click('//button[@id="search-icon-legacy"]');
        await this.page.waitForSelector('ytd-video-renderer');
    }

    async selectRamdonMusic(): Promise<void> {
        const listVideos = await this.page.$$("ytd-video-renderer");
        const ramdonSelectVideo = Math.floor(Math.random()*listVideos.length);
        const video = listVideos[ramdonSelectVideo];
        
        const listTitleVideo = await video.$('a#video-title');
        const titleVideoSelect = await listTitleVideo?.textContent();
        console.log(titleVideoSelect)
        await video.click();

        await expect(titleVideoSelect).toContain(canciones.name);
    }
}