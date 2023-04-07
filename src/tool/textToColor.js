const textToColor = (text) => {
    switch (text) {
        case 'Red':
            return ' text-red-500';
        case 'Blue':
            return ' text-blue-500';
        case 'Green':
            return ' text-green-500';
        case 'Pink':
            return ' text-pink-500';
        case 'Yellow':
            return ' text-yellow-500';
        default:
            return '';
    }
}












export default textToColor