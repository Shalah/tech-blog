// This mod provides the time that is used in the application.
// The time uses Javascript built in functionality instead of a third party such as MOMENT
module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
};
