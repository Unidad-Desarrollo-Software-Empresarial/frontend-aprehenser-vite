export const splitTextToColumns = (text?: string) => {
    if (!text) return ["", ""];
    const columnsToSplit = Math.ceil(text.length / 2);
    for (let i = 0; i < columnsToSplit - 1; i += 1) {
        if (text.at(columnsToSplit + i) === ".") {
            return [
                text.slice(0, columnsToSplit + i + 1),
                text.slice(columnsToSplit + i + 1),
            ];
        }
        if (text.at(columnsToSplit - i) === ".") {
            return [
                text.slice(0, columnsToSplit - i + 1),
                text.slice(columnsToSplit - i + 1),
            ];
        }
    }
};
