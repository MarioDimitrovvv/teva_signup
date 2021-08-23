export default () => {
    const elements = [];

    for (const el of document.getElementById('register-form')) {
        if(el.type !== 'submit') {
            elements.push(el);
        }
    }
    return elements;
}