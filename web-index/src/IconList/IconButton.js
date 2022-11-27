import React from 'react';
import {
    ChakraProvider,
    Image,
    Text
} from '@chakra-ui/react';

const IconButton = (props) => {
    return (
        <React.Fragment>
            <ChakraProvider>
                <a href={props.url}>
                    <Image borderRadius='full'
                            boxSize='32px'
                            src={props.img}
                            alt={props.name}
                            />
                <Text>{props.name}</Text>
                </a>
            </ChakraProvider>
        </React.Fragment>
    );
};

export default IconButton;

