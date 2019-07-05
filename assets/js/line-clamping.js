const mCardDescriptions = document.querySelectorAll('.card-description');

mCardDescriptions.forEach(function(description) {
    // container height
    let container_height = description.clientHeight;

    // text node height
    let text = description.childNodes[0];
    let range = document.createRange();
    range.selectNodeContents(text);
    let rect = range.getBoundingClientRect();
    let text_height = rect.bottom - rect.top;

    if (text_height > container_height) {
        description.textContent = description.textContent.replace(/\W*\s(\S)*$/, '...');
    }
});