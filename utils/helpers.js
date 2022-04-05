module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.8) {
      return `<span for="img" aria-label="dog">🐶</span>`;
    } else if (randomNum > 0.6) {
      return `<span for="img" aria-label="hot dog">🌭</span>`;
    } else if (randomNum > 0.4) { 
      return `<span for="img" aria-label="doggo">🐕</span>`;
    } else if (randomNum > 0.2) {
      return `<span for="img" aria-label="service dog">🐕‍🦺</span>`;
    } else {
      return `<span for ="img" aria-label="guide dog">🦮</span>`
    }
  }
};
