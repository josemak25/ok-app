const jsCode = `

document.querySelector('body').style.backgroundColor = '#F8FBFB';
document.querySelector('.page').style.backgroundColor = '#F8FBFB';

document.querySelector('.nav').style.display = 'none';
document.querySelector('.switcher-container').style.display = 'none';
document.querySelector('.notice-post-job').style.display = 'none';
document.querySelector('.feedback-popup').style.display = 'none';
document.querySelector('.open-startup').style.display = 'none';

const tableBody = document.querySelector('tbody').children
tableBody[0].style.backgroundColor = '#F8FBFB';
tableBody[1].style.backgroundColor = '#F8FBFB';

const instructionsBody = document.querySelector('.instructions')
const instructionsChildren = instructionsBody.children
instructionsChildren[0].style.display = 'none';

const applyButton = document.querySelector('.action-apply')
applyButton.style.padding = '1rem 4rem';
applyButton.style.fontSize = '1.2rem';
applyButton.style.marginTop = '3rem';
applyButton.style.marginBottom = '3rem';

instructionsBody.setAttribute('style', 'border-top: 1px solid rgba(221, 221, 221, 0.7) !important')

const expandContents =  document.querySelector('.expandContents')
expandContents.setAttribute('style', 'background-color: #F8FBFB !important; border-bottom: 1px solid rgba(221, 221, 221, 0.7) !important')

`;

export default jsCode;
