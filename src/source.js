
function strCount(obj, firstIteration = true) {
    // Validation of passed argument
    if (
        obj === null
        || obj === undefined
        || (firstIteration && typeof obj !== 'object')
    ) {
        return 0;
    }

    // Passed argument is a string
    if (typeof obj === 'string') return 1;

    // Set counter to 0
    let counter = 0;

    // Iterate over each value within the object
    Object.values(obj).forEach(value => {
        // String value
        if (typeof value === 'string') {
            counter++;

        // Array value
        } else if (Array.isArray(value)) {
            for (const childValue of value) {
                counter += strCount(childValue, false);
            }

        // Object value
        } else if (typeof value === 'object') {
            counter += strCount(value, false);
        }
    });

    return counter;
}
