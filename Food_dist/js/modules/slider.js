function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          next = document.querySelector(nextArrow),
          prev = document.querySelector(prevArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          indicators = document.createElement('ol'),
          dotsArray = [];

    let slideIndex = 1,
        offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = `${slides.length}`;
    }
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = `${slideIndex}`;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = 'all 0.5s';
    
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(item =>{
        item.style.width = width;
    });

    slider.style.position = 'relative';
    
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        indicators.append(dot);

        if (i === 0) {
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dotsArray.push(dot);

    }

    const dotOn = function(dotNumber){

            dotsArray.forEach(dot => dot.style.opacity = '.5');
            dotsArray[dotNumber].style.opacity = 1;
          },
          changeSlideIndex = function(i){
            
            if (i == 'next') {
                if (slideIndex == slides.length) {
                    slideIndex = 1;
                } else {
                    slideIndex ++;
                }
            }
            if (i == 'prev') {
                if (slideIndex == 1) {
                    slideIndex = slides.length;
                } else {
                    slideIndex --;
                }
            }      
            
            displayCurrentText(slideIndex);
            
          },
          displayCurrentText = function (slideNumber) {
            if (slideNumber < 10) {
                current.textContent = `0${slideNumber}`;
            } else {
                current.textContent = `${slideNumber}`;
            }
          };

    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        changeSlideIndex('next');
        dotOn(slideIndex-1);

    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        changeSlideIndex('prev');
        dotOn(slideIndex-1);
    });

    dotsArray.forEach(dot => {
        
        dot.addEventListener('click', (e) => {

            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            displayCurrentText(slideIndex);
            dotOn(slideIndex-1);
        });

    });

}

export default slider;