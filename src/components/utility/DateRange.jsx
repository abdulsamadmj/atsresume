const DateRange = ({startYear, endYear, id}) => {
  // TODO make as an app param
  const lang = 'en-US' // 'default'

  if (!startYear) {
    return <p id={id} className="sub-content"></p>;
  }

  const start = new Date(startYear);
  const startStr = `${start.toLocaleString(lang, {month: 'short'})} ${start.getFullYear()}`

  let end = endYear ? new Date(endYear) : null;
  let endStr = 'Present'
  let sameMonth = false

  if (end && !isNaN(end.getTime())) {
    endStr = `${end.toLocaleString(lang, {month: 'short'})} ${end.getFullYear()}`
    sameMonth = start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()
  }

  return (
    <p id={id} className="sub-content">
      {sameMonth ? startStr : `${startStr} — ${endStr}`}
    </p>
  );
};

export default DateRange;
