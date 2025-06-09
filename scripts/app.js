console.log();
const myFullname = 'Shiji Gopakumar Sheeja';
const myStudentnumber = '1216193';
console.log(`${myFullname}-${myStudentnumber}`);
const primaryHeadingcontent=document.querySelector('h1');
primaryHeadingcontent.innerHTML= `${myFullname}-${myStudentnumber}`;
primaryHeadingcontent.classList.add('primaryHeading');
