'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23
document.querySelector('.check').addEventListener('click',function() {
 const guess = Number(document.querySelector('.guess').value); 
 console.log(typeof guess);
 prompt("Khai cung me Linh -) bam yes la co no la khong")
})