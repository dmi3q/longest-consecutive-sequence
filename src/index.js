module.exports = function longestConsecutiveLength(array) {
    let set = new Set();
    let longestLength = 0;

    for (let i = 0; i < array.length; i++)
        set.add(array[i]);

    for (let i = 0; i < array.length; i++)
    {
        if (!set.has(array[i] - 1))
        {
            let k = array[i];
            while (set.has(k)) ++k;

            if (longestLength < k - array[i])
                longestLength = k - array[i];
        }
    }
    return longestLength;
}
