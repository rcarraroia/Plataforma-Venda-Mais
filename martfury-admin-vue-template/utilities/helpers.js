export const handleStickyHeader = () => {
    let number =
        window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const header = document.getElementById('header-sticky');
    if (header !== null) {
        if (number >= 300) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        }
    }
};
