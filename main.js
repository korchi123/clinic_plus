class ImageSlider{
    constructor() {
                this.slides = document.querySelectorAll('[class*="about_clinic_right_img"]');
                
                this.prevBtn = document.querySelector('.about_clinic_b_left');
                this.nextBtn = document.querySelector('.about_clinic_b_right');
                this.currentSlide = 0;
                this.totalSlides = this.slides.length;
                
                this.init();
            }
            
            init() {
                // Назначаем обработчики событий
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
              
                
                // Автопереключение (раскомментируйте если нужно)
                //this.startAutoSlide();
            }
            
            updateSlides() {
                // Обновляем позиции всех слайдов
                this.slides.forEach((slide, index) => {
                    slide.classList.remove('slide-active', 'slide-prev', 'slide-next');
                    
                    if (index === this.currentSlide) {
                        slide.classList.add('slide-active');
                    } else if (index < this.currentSlide) {
                        slide.classList.add('slide-prev');
                    } else {
                        slide.classList.add('slide-next');
                    }
                });
                
             
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
                this.updateSlides();
            }
            
            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
                this.updateSlides();
            }
            
            goToSlide(index) {
                if (index >= 0 && index < this.totalSlides) {
                    this.currentSlide = index;
                    this.updateSlides();
                }
            }
            
            startAutoSlide() {
                // Автопереключение каждые 5 секунд
                setInterval(() => {
                    this.nextSlide();
                }, 2000);
            }
        }


document.addEventListener('DOMContentLoaded', () => {
            new ImageSlider();
});

class HeaderScroll{
    constructor(){
        
        this.console1()
    }
    console1(){
        const burgerItem=document.querySelector('.burger');
        console.log(burgerItem)
        const menu=document.querySelector('.header')
        const menuClose=document.querySelector('.header_burger_close')
        burgerItem.addEventListener('click',()=>{
            console.log(1);
            menu.classList.add('header_active')
            
        })
        menuClose.addEventListener('click',()=>{
             menu.classList.remove('header_active')
        })
       
    }
}
document.addEventListener('DOMContentLoaded', () => {
            new HeaderScroll();
});

class Modal{
    constructor(){
        this.openmodal()
        this.openmodal2()
    }
    openmodal() {
        const modal = document.querySelector('.modal_window_call')
        const buttons = document.querySelectorAll('.button_active_modal') // Все кнопки
        const closeModal = document.querySelector('.modal_close')
        
        // Добавляем обработчик для КАЖДОЙ кнопки
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('open_modal')
            })
        })
        
        closeModal.addEventListener('click', () => {
            modal.classList.remove('open_modal')
        })
}
    openmodal2(){
        const modal=document.querySelector('.modal_window_call2')
        const button=document.querySelector('.feedback_open_modal')
        const closeModal=document.querySelector('.modal_close2')
        button.addEventListener('click',()=>{
            modal.classList.add('open_modal2')
        })
        closeModal.addEventListener('click',()=>{
            modal.classList.remove('open_modal2')
        })
    }
}
document.addEventListener('DOMContentLoaded', () => {
            new Modal();
});