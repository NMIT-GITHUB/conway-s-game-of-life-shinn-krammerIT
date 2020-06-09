const universe = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '(+)', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '(+)', '(+)', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '(+)', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '(+)', '(+)', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '(+)', '.', '.', '.', '.', '.', '.', '.']
];


console.table(universe)

function nextGen (universe) {
    const nextGen = universe.map(arr => [...arr]);
    for (let row = 0; row < universe.length; row++) {
        for (let col = 0; col < universe[row].length; col++) {
            const cell = universe[row][col];
            const numNeighbours = 0;
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i == 0 && j === 0) {
                        continue;
                    }      
                const currentNeighbour = universe[row + i][row + j];
                numNeighbours += currentNeighbour;
                }
            }

            if (cell === '(+)' && numNeighbours < 2) {
                nextGen[row][col] = '.';
            } else if (cell === '(+)' && numNeighbours > 3) {
                nextGen[row][col] = '.';
            } else if (cell === '.' && numNeighbours === 3) {
                nextGen[row][col] = '(+)';
            }
        }
    }
}


console.table(universe)