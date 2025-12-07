import type { Condition, Difficulty } from './types';

// --- Basic Conditions (Beginner) ---
export const MaxCondition: Condition = {
    id: 'max',
    description: '一番大きい数字は？',
    descriptionJa: '一番大きい数字は？',
    descriptionEn: 'Which is the largest number?',
    check: (selected, allNumbers) => selected === Math.max(...allNumbers),
};

export const MinCondition: Condition = {
    id: 'min',
    description: '一番小さい数字は？',
    descriptionJa: '一番小さい数字は？',
    descriptionEn: 'Which is the smallest number?',
    check: (selected, allNumbers) => selected === Math.min(...allNumbers),
};

export const EvenCondition: Condition = {
    id: 'even',
    description: '偶数は？',
    descriptionJa: '偶数は？',
    descriptionEn: 'Which is an even number?',
    check: (selected, _allNumbers) => selected % 2 === 0,
};

export const OddCondition: Condition = {
    id: 'odd',
    description: '奇数は？',
    descriptionJa: '奇数は？',
    descriptionEn: 'Which is an odd number?',
    check: (selected, _allNumbers) => selected % 2 !== 0,
};

// --- Intermediate Conditions ---
export const MultipleOf3Condition: Condition = {
    id: 'multipleOf3',
    description: '3の倍数は？',
    descriptionJa: '3の倍数は？',
    descriptionEn: 'Which is a multiple of 3?',
    check: (selected, _allNumbers) => selected % 3 === 0,
};

export const MultipleOf4Condition: Condition = {
    id: 'multipleOf4',
    description: '4の倍数は？',
    descriptionJa: '4の倍数は？',
    descriptionEn: 'Which is a multiple of 4?',
    check: (selected, _allNumbers) => selected % 4 === 0,
};

export const MultipleOf5Condition: Condition = {
    id: 'multipleOf5',
    description: '5の倍数は？',
    descriptionJa: '5の倍数は？',
    descriptionEn: 'Which is a multiple of 5?',
    check: (selected, _allNumbers) => selected % 5 === 0,
};

// 桁の和を計算するヘルパー関数
const getDigitSum = (num: number): number => {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
};

export const MaxDigitSumCondition: Condition = {
    id: 'maxDigitSum',
    description: '桁の和が一番大きいのは？',
    descriptionJa: '桁の和が一番大きいのは？',
    descriptionEn: 'Which has the largest digit sum?',
    check: (selected, allNumbers) => {
        const maxSum = Math.max(...allNumbers.map(getDigitSum));
        return getDigitSum(selected) === maxSum;
    },
};

export const MinDigitSumCondition: Condition = {
    id: 'minDigitSum',
    description: '桁の和が一番小さいのは？',
    descriptionJa: '桁の和が一番小さいのは？',
    descriptionEn: 'Which has the smallest digit sum?',
    check: (selected, allNumbers) => {
        const minSum = Math.min(...allNumbers.map(getDigitSum));
        return getDigitSum(selected) === minSum;
    },
};

// --- Advanced Conditions ---
export const SecondMaxCondition: Condition = {
    id: 'secondMax',
    description: '2番目に大きい数字は？',
    descriptionJa: '2番目に大きい数字は？',
    descriptionEn: 'Which is the 2nd largest number?',
    check: (selected, allNumbers) => {
        const sorted = [...allNumbers].sort((a, b) => b - a); // 降順
        return selected === sorted[1];
    },
};

export const SecondMinCondition: Condition = {
    id: 'secondMin',
    description: '2番目に小さい数字は？',
    descriptionJa: '2番目に小さい数字は？',
    descriptionEn: 'Which is the 2nd smallest number?',
    check: (selected, allNumbers) => {
        const sorted = [...allNumbers].sort((a, b) => a - b); // 昇順
        return selected === sorted[1];
    },
};

export const Over50EvenCondition: Condition = {
    id: 'over50Even',
    description: '50以上かつ偶数は？',
    descriptionJa: '50以上かつ偶数は？',
    descriptionEn: 'Even number 50 or above?',
    check: (selected, _allNumbers) => selected >= 50 && selected % 2 === 0,
};

export const Under30OddCondition: Condition = {
    id: 'under30Odd',
    description: '30以下かつ奇数は？',
    descriptionJa: '30以下かつ奇数は？',
    descriptionEn: 'Odd number 30 or below?',
    check: (selected, _allNumbers) => selected <= 30 && selected % 2 !== 0,
};

// 動的条件生成のためのヘルパー
const createClosestCondition = (target: number): Condition => ({
    id: `closestTo${target}`,
    description: `${target}に一番近い数字は？`,
    descriptionJa: `${target}に一番近い数字は？`,
    descriptionEn: `Which is closest to ${target}?`,
    check: (selected, allNumbers) => {
        const diffs = allNumbers.map(n => Math.abs(n - target));
        const minDiff = Math.min(...diffs);
        return Math.abs(selected - target) === minDiff;
    },
});

// --- Master Conditions ---
// 素数判定ヘルパー
const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

export const PrimeCondition: Condition = {
    id: 'prime',
    description: '素数は？',
    descriptionJa: '素数は？',
    descriptionEn: 'Which is a prime number?',
    check: (selected, _allNumbers) => isPrime(selected),
};

// 約数の数を数えるヘルパー
const countDivisors = (num: number): number => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i * i === num) count++;
            else count += 2;
        }
    }
    return count;
};

export const MaxDivisorsCondition: Condition = {
    id: 'maxDivisors',
    description: '約数の数が一番多いのは？',
    descriptionJa: '約数の数が一番多いのは？',
    descriptionEn: 'Which has the most divisors?',
    check: (selected, allNumbers) => {
        const maxCount = Math.max(...allNumbers.map(countDivisors));
        return countDivisors(selected) === maxCount;
    },
};

// 否定条件
export const NotEvenCondition: Condition = {
    id: 'notEven',
    description: '偶数ではない（奇数）のは？',
    descriptionJa: '偶数ではない（奇数）のは？',
    descriptionEn: 'Which is NOT even?',
    check: (selected, _allNumbers) => selected % 2 !== 0,
};

export const NotMultipleOf3Condition: Condition = {
    id: 'notMultipleOf3',
    description: '3の倍数ではないのは？',
    descriptionJa: '3の倍数ではないのは？',
    descriptionEn: 'Which is NOT a multiple of 3?',
    check: (selected, _allNumbers) => selected % 3 !== 0,
};

// メモリ条件（前の正解との比較）
const createGreaterThanPrevCondition = (prev: number): Condition => ({
    id: `greaterThanPrev${prev}`,
    description: `前の正解(${prev})より大きい数字は？`,
    descriptionJa: `前の正解(${prev})より大きい数字は？`,
    descriptionEn: `Number greater than previous(${prev})?`,
    check: (selected, _allNumbers) => selected > prev,
});

const createLessThanPrevCondition = (prev: number): Condition => ({
    id: `lessThanPrev${prev}`,
    description: `前の正解(${prev})より小さい数字は？`,
    descriptionJa: `前の正解(${prev})より小さい数字は？`,
    descriptionEn: `Number less than previous(${prev})?`,
    check: (selected, _allNumbers) => selected < prev,
});

// --- Condition Pools ---
const BeginnerConditions: Condition[] = [
    MaxCondition,
    MinCondition,
    EvenCondition,
    OddCondition,
];

const IntermediateConditions: Condition[] = [
    ...BeginnerConditions,
    MultipleOf3Condition,
    MultipleOf4Condition,
    MultipleOf5Condition,
    MaxDigitSumCondition,
    MinDigitSumCondition,
];

const AdvancedConditions: Condition[] = [
    ...IntermediateConditions,
    SecondMaxCondition,
    SecondMinCondition,
    Over50EvenCondition,
    Under30OddCondition,
];

const MasterConditions: Condition[] = [
    ...AdvancedConditions,
    PrimeCondition,
    MaxDivisorsCondition,
    NotEvenCondition,
    NotMultipleOf3Condition,
    // Memory conditions added dynamically
];

const ConditionPools: Record<Difficulty, Condition[]> = {
    beginner: BeginnerConditions,
    intermediate: IntermediateConditions,
    advanced: AdvancedConditions,
    master: MasterConditions,
};

export const generateCondition = (
    numbers: number[],
    difficulty: Difficulty = 'beginner',
    previousAnswer: number | null = null
): Condition => {
    const pool = [...ConditionPools[difficulty]];

    // Advanced以上なら動的条件を追加
    if (difficulty === 'advanced' || difficulty === 'master') {
        const target = Math.floor(Math.random() * 80) + 10;
        pool.push(createClosestCondition(target));
    }

    // Masterかつ前の正解がある場合、メモリ条件を追加
    if (difficulty === 'master' && previousAnswer !== null) {
        pool.push(createGreaterThanPrevCondition(previousAnswer));
        pool.push(createLessThanPrevCondition(previousAnswer));
    }

    let attempts = 0;
    while (attempts < 50) {
        const condition = pool[Math.floor(Math.random() * pool.length)];

        const correctCount = numbers.filter(n => condition.check(n, numbers)).length;

        if (correctCount === 1) {
            return condition;
        }

        attempts++;
    }

    return MaxCondition;
};

export const checkAnswer = (selected: number, allNumbers: number[], condition: Condition): boolean => {
    return condition.check(selected, allNumbers);
};
