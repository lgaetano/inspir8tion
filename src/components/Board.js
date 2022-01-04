import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Board = (props) => {
    // console.log(title);
    return (
        <>
            <li>
                Title column: {props.title}
            </li>
        </>
    );
};

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};

export default Board;