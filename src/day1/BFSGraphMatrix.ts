export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adj = graph[curr];
        for (let i = 0; i < adj.length; ++i) {
            if (adj[i] === 0) continue;

            if (seen[i]) continue;

            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
        seen[curr] = true;
    } while (q.length);

    // build it backwards
    const out: number[] = [];

    if (out.length) {
        return [source].concat(out.reverse());
    }

    let curr = needle;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [];
}
