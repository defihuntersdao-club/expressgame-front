const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

// Function timer returns string which be able to included in some tag
function timer(timestamp) {
  const date = new Date().getTime();

  if (date < timestamp) {
    const x = timestamp - date;
    const d = x > ONE_DAY ? Math.floor(x / ONE_DAY) : '00d';
    const h = x > ONE_HOUR ? Math.floor((x / ONE_HOUR) % 24) : '00h';
    const m = x > ONE_MINUTE ? Math.floor((x / ONE_MINUTE) % 60) : '00m';
    const s = x > ONE_SECOND ? Math.floor((x / ONE_SECOND) % 60) : '00s';
    return `${d}d ${h}h ${m}m ${s}s`
  } else {
    return `00d 00h 00m 00s`
  }
}

(function timerLevel() {
  const timerLevelId = setInterval(() => {
    const x = 1652552811741;
    const y = timer(x);

    __render_html.renderTimerLevel(y);
  }, 1000)
})();