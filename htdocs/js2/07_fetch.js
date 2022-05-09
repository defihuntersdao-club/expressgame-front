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
        __store_express.set.setHomeLevelsSchedule({ data: JSON.parse(response), loading: false });
      }
    };

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        __store_express.set.setHomeLevelsSchedule(JSON.parse({ data: JSON.parse(response), loading: true }));
        console.warn(`Get ${event.loaded} from ${event.total} byte`);
      } else {
        console.warn(`Get ${event.loaded} byte`);
      }

    };

    xhr.onerror = function () {
      // failed
    };
  }
})();


(async function fetchRecentActivity() {
  const regEpx = /index/;
  if (window.location.href.match(regEpx)) {
    const url = '../mock/recent-activity.json'
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        // mistake

      } else {
        // success
        let response = xhr.response;
        __store_express.set.setHomeRecentActivity({ data: JSON.parse(response), loading: false });
      }
    };

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        __store_express.set.setHomeRecentActivity(JSON.parse({ data: JSON.parse(response), loading: true }));
        console.warn(`Get ${event.loaded} from ${event.total} byte`);
      } else {
        console.warn(`Get ${event.loaded} byte`);
      }

    };

    xhr.onerror = function () {
      // failed
    };
  }
})();