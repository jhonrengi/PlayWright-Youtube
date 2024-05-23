import { test, expect } from '@playwright/test';
import { youtubePage } from './pageObject/youtubePageObject';
import { IYoutube } from './interfaces/YoutubeUI';
import { canciones } from './data/NameSong';


test.describe('Suite', ()=>{
    test('searching song', async ({page})=>{
            const youtube:IYoutube = new youtubePage(page);
            await youtube.goto();
            await youtube.fillOnPlaceholder(canciones.name);
            await youtube.clickOnBotonSearch();
            await youtube.selectRamdonMusic();

        });
  });