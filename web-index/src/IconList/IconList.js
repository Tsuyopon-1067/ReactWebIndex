import React from 'react';
import {
    ChakraProvider,
    Text
} from '@chakra-ui/react';
// import ImgYweather from './img/Yweather.png';
// import ImgYtrans from './img/Ytrans.png';
// import ImgEntetsu from './img/entetsu.png';
// import ImgGeogebra from './img/geogebra.png';
// import ImgAtcoder from './img/atcoder.png';
// import ImgAtcoderProblems from './img/atcoderProblems.png';
// import ImgAlgo from './img/algo.png';
// import ImgOnedrive from './img/onedrive.png';
// import ImgTeams from './img/teams.png';
// import ImgGithub from './img/github.png';
import {
    IconButton,
    ImgGoogle,
    ImgGmail,
    ImgGmap,
    ImgYoutube,
    ImgTwitter,
    ImgInsta,
    ImgPhoto,
    ImgAmazon,
    ImgDrive,
    ImgDeepL,
    ImgGtranslate,
    ImgGkeep,
    ImgGakujo,
    ImgShizudai,
    ImgOpac,
    ImgEtyping,
    ImgMytyping,
    ImgSushida
} from './Icons.js';
import { icons } from 'react-icons';



const IconList = (props) => {
    return (
        <ChakraProvider>
            <IconButton name='Google'
                        url='https://www.google.co.jp/'
                        img={ImgGoogle} />
            <IconButton name='Gmail'
                        url='https://mail.google.com/'
                        img={ImgGmail} />
            <IconButton name='Map'
                        url='https://www.google.co.jp/maps/'
                        img={ImgGmap} />
            <IconButton name='YouTube'
                        url='https://www.youtube.com/'
                        img={ImgYoutube} />
            <IconButton name='Twitter'
                        url='https://twitter.com/home'
                        img={ImgTwitter} />
            <IconButton name='Instagram'
                        url='https://www.instagram.com/?hl=ja'
                        img={ImgInsta} />
            <IconButton name='Photo'
                        url='https://photos.google.com/'
                        img={ImgPhoto} />
            <IconButton name='amazon'
                        url='https://www.amazon.co.jp/'
                        img={ImgAmazon} />
            <IconButton name='Google Drive'
                        url='https://drive.google.com/drive/my-drive'
                        img={ImgDrive} />
            <IconButton name='DeepL'
                        url='https://www.deepl.com/translator'
                        img={ImgDeepL} />
            <IconButton name='Google翻訳'
                        url='https://translate.google.co.jp/'
                        img={ImgGtranslate} />
            <IconButton name='GoogleKeep'
                        url='https://keep.google.com/'
                        img={ImgGkeep} />
            <IconButton name='LiveCampus'
                        url='https://gakujo.shizuoka.ac.jp/portal/'
                        img={ImgGakujo} />
            <IconButton name='静岡大学'
                        url='https://www.shizuoka.ac.jp/'
                        img={ImgShizudai} />
            <IconButton name='OPAC'
                        url='https://opac.lib.shizuoka.ac.jp/opac/'
                        img={ImgOpac} />
            <IconButton name='e-typing'
                        url='https://www.e-typing.ne.jp/'
                        img={ImgEtyping} />
            <IconButton name='mytyping'
                        url='https://typing.twi1.me/'
                        img={ImgMytyping} />
            <IconButton name='寿司打'
                        url='https://sushida.net/'
                        img={ImgSushida} />
        </ChakraProvider>
    );
};

export default IconList;