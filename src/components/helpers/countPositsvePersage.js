export const countPositiveFeedbackPercentage = (good, total) => {
   return total === 0 ? '0' : Math.round((good / total) * 100);
};