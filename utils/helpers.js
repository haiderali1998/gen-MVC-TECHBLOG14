module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // format_date: (date) => {
  //   const formattedDate = `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
  //     new Date(date).getFullYear()
  //   }`;
  //   console.log('date:', formattedDate)
  //   return formattedDate;
  //   // return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
  //   //   new Date(date).getFullYear()
  //   // }`;
  // },
  format_date: (date) => Intl.DateTimeFormat('default', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date))
};
