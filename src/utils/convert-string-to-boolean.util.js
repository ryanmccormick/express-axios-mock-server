function convertStringToBoolean(value) {
  try {
    if (!!value) {
      return (value || '').toLowerCase().trim() === 'true';
    }
  } catch (exception) {
    return false;
  }
}

module.exports = convertStringToBoolean;
