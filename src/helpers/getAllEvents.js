import addUniqueID from './addUniqueID';

const getAllEvents = (data) => {
  const countries = Object.keys(data);
  let events = [];
  countries.forEach((country) => {
    events = [...events, ...data[country]?.events];
  });

  return addUniqueID(events);
};

export default getAllEvents;
