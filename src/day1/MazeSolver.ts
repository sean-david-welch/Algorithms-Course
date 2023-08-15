const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]; // this is a good leet code trick

const walk = (maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean => {
    // Base Cases:

    // 1. Off the map:
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze[0].length) {
        return false;
    }

    // 2. On a wall:
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. At the end:
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. Seen it:
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recurse - cant use for each
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    // Post
    path.pop();

    return false;
};

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
