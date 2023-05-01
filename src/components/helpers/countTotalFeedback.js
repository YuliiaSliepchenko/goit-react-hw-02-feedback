export const countTotalFeedback = (state) => {
const values = Object.values(state);
return values.reduce((acc, value) => {
    return acc + value;
}, 0)
};

