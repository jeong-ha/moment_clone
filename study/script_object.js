//배열[] //obj{}
const player = {
    name:"nico", //inside not use =, instead use :
    points : 10,
    fat : true,
};
console.log(player);
console.log(player.name);
console.log(player["points"]);
player.fat = false; //const는 수정이 불가하지만, 이것은 object의 일부라 ㄱㅊ
console.log(player);
player.points = player.points + 20;
player.lastName = "potato";
console.log(player);