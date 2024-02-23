
const getStatusColor = (status) => {
    switch (status) {
        case 'Completed':
            return '#00933F';
        case 'On Delivery':
            return '#4871FF';
        case 'Returned':
            return '#FF3A44';
        default:
            return 'black';
    }
};

export default getStatusColor;
