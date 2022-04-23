'use strict';

const scrollContent = document.querySelector('.custom-scroll');

if ( scrollContent ) {
    new PerfectScrollbar(scrollContent);
}

let selectContent = document.querySelector('.select');

selectContent.addEventListener('click', function(){
    let scrollContentModal = document.querySelector('.custom-scroll-select');
    new PerfectScrollbar(scrollContentModal, {
        wheelSpeed: 0.2,
        wheelPropagation: false
    }); 
});

let previewModeForm = document.getElementById('preview-mode-form');
if ( previewModeForm ) {
    let previewModeBtn = previewModeForm.querySelector('.btn');
    let previewModeInput = previewModeForm.querySelector('.inputblock-input input');
    let errorMessage = previewModeForm.querySelector('.error-message');

    function locationUserIdPage() {
        document.location.href = './account.html';
    }

    previewModeBtn.addEventListener('click', function(){
        if ( previewModeInput.value != 0 ) {
            console.log(previewModeInput.value);
            locationUserIdPage();
        } else {
            errorMessage.style.display = 'flex';
            return false;
        }
    });
    errorMessage.addEventListener('click', function(){
        this.style.display = 'none';
    });
    
    previewModeInput.addEventListener('focus', function(){
        errorMessage.style.display = 'none';
    });
}

const select = new CustomSelect('.select', {
    name: 'gameLevel',
    options: [
        ['level2', 'Level 2 (0.07 BNB)'],
        ['level3', 'Level 3 (0.1 BNB)'],
        ['level4', 'Level 4 (0.14 BNB)'],
        ['level5', 'Level 5 (0.2 BNB)'],
        ['level6', 'Level 6 (0.28 BNB)'],
        ['level7', 'Level 7 (0.4 BNB)'],
        ['level8', 'Level 8 (0.55 BNB)'],
        ['level9', 'Level 9 (0.8 BNB)'],
        ['level10', 'Level 10 (1.1 BNB)'],
        ['level11', 'Level 11 (1.6 BNB)'],
        ['level12', 'Level 12 (2.2 BNB)'],
        ['level13', 'Level 13 (3.2 BNB)'],
        ['level14', 'Level 14 (4.4 BNB)'],
        ['level15', 'Level 15 (6.5 BNB)'],
        ['level16', 'Level 16 (8 BNB)'],
    ],
  }); 








