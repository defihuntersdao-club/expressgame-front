let xhr = new XMLHttpRequest();

(async function fetchLevelsSchedule() {
  const regEpx = /index/;
  if (window.location.href.match(regEpx)) {
    const url = '../mock/levels-start-schedule.json'
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        // mistake

      } else {
        // success
        let response = xhr.response;
        __store_express.set.setHomeLevelsSchedule(JSON.parse(response));
      }
    };

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        console.log(`Get ${event.loaded} from ${event.total} byte`);
      } else {
        console.log(`Get ${event.loaded} byte`);
      }

    };

    xhr.onerror = function () {
      // failed
    };
  }
})()