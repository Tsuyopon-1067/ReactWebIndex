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
    IconButtonGoogle,
    IconButtonGmail,
    IconButtonGmap,
    IconButtonYoutube,
    IconButtonTwitter,
    IconButtonInsta,
    IconButtonGphoto,
    IconButtonAmazon,
    IconButtonDrive,
    IconButtonDeepl,
    IconButtonGtranslate,
    IconButtonGkeep,
    IconButtonLivecampus,
    IconButtonShizudai,
    IconButtonOpac,
    IconButtonEtyping,
    IconButtonMytyping,
    IconButtonSushida,
    IconButtonYweather,
    IconButtonYtransport,
} from './IconButtons.js';
import { icons } from 'react-icons';

const IconList = (props) => {
    return (
        <ChakraProvider>
            <IconButtonGoogle />
            <IconButtonGmail />
            <IconButtonGmap />
            <IconButtonYoutube />
            <IconButtonGphoto />
            <IconButtonGkeep />
            <IconButtonTwitter />
            <IconButtonDeepl />
            <IconButtonLivecampus />
            <IconButtonYweather />
            <IconButtonYtransport />
        </ChakraProvider>
    );
};

export default IconList;