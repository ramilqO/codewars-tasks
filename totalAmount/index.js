function points(games) {
    return games.reduce((acc, i) => {
        if (i[0] > i[2]) return acc + 3; //win
        else if (i[0] < i[2]) return acc + 0; //lose
        else if (i[0] == i[2]) return acc + 1;
    }, 0)
}

console.log(points(["3:1", "2:2", "0:1"])); // 4
