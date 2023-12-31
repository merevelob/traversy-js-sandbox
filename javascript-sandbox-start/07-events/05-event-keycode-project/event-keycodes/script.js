function getKeyInfo(event) {
    const keyText = event.key === ' ' 
        ? document.createTextNode('Space')
        : document.createTextNode(event.key);
    const keyCodeText = document.createTextNode(event.keyCode);
    const codeText = document.createTextNode(event.code);
    
    const innerDivs = document.querySelectorAll('.key');

    innerDivs.forEach((div, index) => {
        if (index === 0) {
            div.replaceChild(keyText, div.childNodes[0]);
        } else if (index === 1) {
            div.replaceChild(keyCodeText, div.childNodes[0]);
        } else {
            div.replaceChild(codeText, div.childNodes[0]);
        }
    });
}

window.addEventListener('keypress', getKeyInfo);