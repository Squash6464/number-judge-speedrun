/**
 * 指定された範囲内でランダムな整数を生成する
 */
const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 指定された数の選択肢を生成する
 * 単純にランダムな数値を生成する（重複なし）
 * @param count 選択肢の数
 * @param min 最小値
 * @param max 最大値
 */
export const generateNumbers = (
    count: number = 2,
    min: number = 1,
    max: number = 99
): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < count) {
        numbers.add(getRandomInt(min, max));
    }
    return Array.from(numbers);
};
