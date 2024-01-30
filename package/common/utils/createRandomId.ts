type FirstType = string;

const createRandomId = (firstId?: FirstType) =>
  `${firstId || 'won'}-${Math.random().toString(36).slice(2, 9)}`;

export default createRandomId;
