function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitUntil(condition, interval = 100) {
    return new Promise(resolve => {
        const checkCondition = () => {
            if (condition()) {
                resolve();
            } else {
                setTimeout(checkCondition, interval);
            }
        };
        checkCondition();
    });
}

function repeatUntil(condition, task, interval = 100) {
    return new Promise(async resolve => {
        while (!condition()) {
            await task();
            await sleep(interval);
        }
        resolve();
    });
}

async function parallel(tasks) {
    return await Promise.all(tasks.map(task => task()));
}

async function retryUntilSuccessful(operation, maxAttempts, delay = 1000) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        try {
            return await operation();
        } catch (error) {
            // Handle or log the error if needed
        }
        await sleep(delay);
        attempts++;
    }
    throw new Error("Maximum retry attempts reached.");
}

async function sequence(tasks) {
    for (const task of tasks) {
        await task();
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function formatString(template, ...values) {
    return template.replace(/{(\d+)}/g, (match, index) => values[index] || match);
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

function uniqueArray(arr) {
    return [...new Set(arr)];
}


export {formatString,getRandomInt,mergeObjects,parallel,repeatUntil,retryUntilSuccessful,sequence,shuffleArray,sleep,uniqueArray,waitUntil,deepClone}