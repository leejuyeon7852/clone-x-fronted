for (let i = 1; i <= 5; i++) {
    for (let b = 1; b <= 5 - i; b++) {
        process.stdout.write(" ");
    }
    for (let a = 1; a <= 2 * i - 1; a++) {
        process.stdout.write("*");
    }
    console.log(); // 줄 바꿈
}