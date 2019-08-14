import React from 'react';

// -- Working version --

function Title({ text }) {
    return <div>{text}</div>;
}

export default Title;

// -- NOT Working version. uncomment this version instead of the above one to fail the tests --

// export default function Title({ text }) {
//     return <div>{text}</div>;
// }

// Title;
