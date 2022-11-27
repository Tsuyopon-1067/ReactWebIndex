import React from 'react';
import IconButton from './IconButton.js';

import ImgGoogle        from './img/google.png';
import ImgGmail         from './img/Gmail.png';
import ImgGmap          from './img/Gmap.png';
import ImgYoutube       from './img/youtube.png';
import ImgTwitter       from './img/twitter.png';
import ImgInsta         from './img/instagram.png';
import ImgPhoto         from './img/Gphoto.png';
import ImgAmazon        from './img/amazon.png';
import ImgDrive         from './img/Gdrive.png';
import ImgDeepL         from './img/deepl.png';
import ImgGtranslate    from './img/Gtranslate.png';
import ImgGkeep         from './img/Gkeep.png';
import ImgGakujo        from './img/gakujo.png';
import ImgShizudai      from './img/shizu.png';
import ImgOpac          from './img/opac.png';
import ImgEtyping       from './img/etyping.png';
import ImgMytyping      from './img/mytyping.png';
import ImgSushida       from './img/sushida.png';
import ImgYweather      from './img/Yweather.png';
import ImgYtransport    from './img/Ytrans.png';


export const IconButtonGoogle = (props) => {
    return (
        <IconButton name='Google'
                    url='https://www.google.co.jp/'
                    img={ImgGoogle} />
    );
};
export const IconButtonGmail = (props) => {
    return (
        <IconButton name='Gmail'
                    url='https://mail.google.com/'
                    img={ImgGmail} />
    );
};
export const IconButtonGmap = (props) => {
    return (
        <IconButton name='Map'
                    url='https://www.google.co.jp/maps/'
                    img={ImgGmap} />
    );
};
export const IconButtonYoutube = (props) => {
    return (
        <IconButton name='YouTube'
                    url='https://www.youtube.com/'
                    img={ImgYoutube} />
    );
};
export const IconButtonTwitter = (props) => {
    return (
        <IconButton name='Twitter'
                    url='https://twitter.com/home'
                    img={ImgTwitter} />
    );
};
export const IconButtonInstagram = (props) => {
    return (
        <IconButton name='Instagram'
                    url='https://www.instagram.com/?hl=ja'
                    img={ImgInsta} />
    );
};
export const IconButtonGphoto = (props) => {
    return (
        <IconButton name='Photo'
                    url='https://photos.google.com/'
                    img={ImgPhoto} />
    );
};
export const IconButtonAmazon = (props) => {
    return (
        <IconButton name='amazon'
                    url='https://www.amazon.co.jp/'
                    img={ImgAmazon} />
    );
};
export const IconButtonGdrive = (props) => {
    return (
        <IconButton name='Google Drive'
                    url='https://drive.google.com/drive/my-drive'
                    img={ImgDrive} />
    );
};
export const IconButtonDeepl = (props) => {
    return (
        <IconButton name='DeepL'
                    url='https://www.deepl.com/translator'
                    img={ImgDeepL} />
    );
};
export const IconButtonGtrans = (props) => {
    return (
        <IconButton name='Google翻訳'
                    url='https://translate.google.co.jp/'
                    img={ImgGtranslate} />
    );
};
export const IconButtonGkeep = (props) => {
    return (
        <IconButton name='GoogleKeep'
                    url='https://keep.google.com/'
                    img={ImgGkeep} />
    );
};
export const IconButtonLivecampus = (props) => {
    return (
        <IconButton name='LiveCampus'
                    url='https://gakujo.shizuoka.ac.jp/portal/'
                    img={ImgGakujo} />
    );
};
export const IconButtonShizudai = (props) => {
    return (
        <IconButton name='静岡大学'
                    url='https://www.shizuoka.ac.jp/'
                    img={ImgShizudai} />
    );
};
export const IconButtonOpac = (props) => {
    return (
        <IconButton name='OPAC'
                    url='https://opac.lib.shizuoka.ac.jp/opac/'
                    img={ImgOpac} />
    );
};
export const IconButtonEtyping = (props) => {
    return (
        <IconButton name='e-typing'
                    url='https://www.e-typing.ne.jp/'
                    img={ImgEtyping} />
    );
};
export const IconButtonMytyping = (props) => {
    return (
        <IconButton name='mytyping'
                    url='https://typing.twi1.me/'
                    img={ImgMytyping} />
    );
};
export const IconButtonSushida = (props) => {
    return (
        <IconButton name='寿司打'
                    url='https://sushida.net/'
                    img={ImgSushida} />
    );
};
export const IconButtonYweather = (props) => {
    return (
        <IconButton name='Y!天気'
                    url='https://weather.yahoo.co.jp/weather/22/5040/22131.html'
                    img={ImgYweather} />
    );
};
export const IconButtonYtransport = (props) => {
    return (
        <IconButton name='Y!乗り換え'
                    url='https://transit.yahoo.co.jp/'
                    img={ImgYtransport} />
    );
};