function pageQueryLinkGenerator(queryObject) {
  let str = [];
  for (var p in queryObject)
    if (queryObject.hasOwnProperty(p) && queryObject[p]) {
      str.push(
        encodeURIComponent(p) + "=" + encodeURIComponent(queryObject[p])
      );
    }

  const joinedString = str.join("&");
  return joinedString ? "?" + joinedString : joinedString;
}

const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("/");
};

export { pageQueryLinkGenerator, formatDate };
