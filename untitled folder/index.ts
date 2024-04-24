function printGrade(percentage: number): void {
if (percentage >= 90 && percentage <=100) {
console.log("A Grade");
true;
}else if (percentage >=80 && percentage <=90) {
console.log("B Grade");
true;
}else if (percentage >=70 && percentage <=80) {
console.log("C Grade");
true;
}else if (percentage >=60 && percentage <=70) {
console.log("D Grade");
true;
} else {
    console.log("Fail");
    false;
}

}