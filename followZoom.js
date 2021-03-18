export const followZoom = (target) => {
    // (A) FETCH CONTAINER + IMAGE
    let container = target;
    let imgsrc =
        container.currentStyle || window.getComputedStyle(container, false);
    imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, '');
    let img = new Image();

    // (B) LOAD IMAGE + ATTACH ZOOM
    img.src = imgsrc;

    img.onload = function () {
        let imgWidth = img.naturalWidth;
        let imgHeight = img.naturalHeight;
        let ratio = imgHeight / imgWidth;
        // let percentage = ratio * 100 + '%';

        // (C) ZOOM ON MOUSE MOVE
        container.onmousemove = function (e) {
            let boxWidth = container.clientWidth;
            let rect = e.target.getBoundingClientRect();
            let xPos = e.clientX - rect.left;
            let yPos = e.clientY - rect.top;
            let xPercent = xPos / (boxWidth / 100) + '%';
            let yPercent = yPos / ((boxWidth * ratio) / 100) + '%';

            Object.assign(container.style, {
                backgroundPosition: xPercent + ' ' + yPercent,
                backgroundSize: imgWidth + 'px',
            });

            // (D) RESET ON MOUSE LEAVE
            container.onmouseleave = function (e) {
                Object.assign(container.style, {
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                });
            };
        };
    };
};
