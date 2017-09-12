const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1280px',
        fields: '40px'
    },
    breakPoints: {
        lg: {
            width: "1200px",
            fields: "40px"
        },
        md: {
            width: "992px",
            fields: "40px"
        },
        sm: {
            width: "720px",
            fields: "20px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/precss', settings);