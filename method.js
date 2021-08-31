const student = {
    id: 285,
    balance:5000,
    name:'RJ babu',
    major :'history',
    isRich :false,
    subjects :['english','math o2', 'bangla'],
    bestFriend :{
        name:'jajabor',
        major:'math o2',

    },
    takaExam:function () {
        console.log(this.name,'takaExam');
    },
    treatDey:function(expense){
        this.balance = this.balance - expense;
        return this.balance;
    }
}
student.takaExam();
const remaining1 = student . treatDey (900);
const remaining2 = student . treatDey (500);
console.log(remaining2);