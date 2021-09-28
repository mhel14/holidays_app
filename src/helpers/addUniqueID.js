const addUniqueID = (events) => {
  const alteredEvents = events && events.map((event) => ({
    ...event,
    key: `_${Math.random().toString(36).substr(2, 9)}`,
  }));
  return alteredEvents;
};

export default addUniqueID;
