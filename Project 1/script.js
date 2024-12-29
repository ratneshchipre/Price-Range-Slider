const rangeInputSlider = document.querySelectorAll('.price-range input');
const progress = document.querySelector('.slider .progress');
const inputPrice = document.querySelectorAll('.price-input input');

let priceGap = 1000;

rangeInputSlider.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInputSlider[0].value),
        maxVal = parseInt(rangeInputSlider[1].value);

        if(maxVal - minVal < priceGap) {
            if(e.target.className === 'min-range') {
                rangeInputSlider[0].value = maxVal - priceGap;
            } else {
                rangeInputSlider[1].value = minVal + priceGap;
            }
        } else {
            inputPrice[0].value = minVal;
            inputPrice[1].value = maxVal;
            progress.style.left = (minVal / rangeInputSlider[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInputSlider[1].max) * 100 + "%";
        }
    });
});

inputPrice.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(inputPrice[0].value),
        maxVal = parseInt(inputPrice[1].value);

        if((maxVal - minVal > priceGap) && maxVal <= 10000) {
            if(e.target.className === 'min-price-input') {
                rangeInputSlider[0].value = minVal;
                progress.style.left = (minVal / rangeInputSlider[0].max) * 100 + "%";
            } else {
                rangeInputSlider[1].value = maxVal;
                progress.style.right = 100 - (maxVal / rangeInputSlider[1].max) * 100 + "%";
            }
        }
    });
});