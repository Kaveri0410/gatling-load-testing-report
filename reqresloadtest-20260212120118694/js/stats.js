var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1250",
        "ok": "0",
        "ko": "1250"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "3941",
        "ok": "-",
        "ko": "3941"
    },
    "meanResponseTime": {
        "total": "506",
        "ok": "-",
        "ko": "506"
    },
    "standardDeviation": {
        "total": "699",
        "ok": "-",
        "ko": "699"
    },
    "percentiles1": {
        "total": "158",
        "ok": "-",
        "ko": "158"
    },
    "percentiles2": {
        "total": "541",
        "ok": "-",
        "ko": "541"
    },
    "percentiles3": {
        "total": "2149",
        "ok": "-",
        "ko": "2149"
    },
    "percentiles4": {
        "total": "2891",
        "ok": "-",
        "ko": "2891"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1250,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.021",
        "ok": "-",
        "ko": "13.021"
    }
},
contents: {
"req_get-users-b198a": {
        type: "REQUEST",
        name: "Get Users",
path: "Get Users",
pathFormatted: "req_get-users-b198a",
stats: {
    "name": "Get Users",
    "numberOfRequests": {
        "total": "1250",
        "ok": "0",
        "ko": "1250"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "-",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "3941",
        "ok": "-",
        "ko": "3941"
    },
    "meanResponseTime": {
        "total": "506",
        "ok": "-",
        "ko": "506"
    },
    "standardDeviation": {
        "total": "699",
        "ok": "-",
        "ko": "699"
    },
    "percentiles1": {
        "total": "158",
        "ok": "-",
        "ko": "158"
    },
    "percentiles2": {
        "total": "541",
        "ok": "-",
        "ko": "541"
    },
    "percentiles3": {
        "total": "2149",
        "ok": "-",
        "ko": "2149"
    },
    "percentiles4": {
        "total": "2891",
        "ok": "-",
        "ko": "2891"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1250,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.021",
        "ok": "-",
        "ko": "13.021"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
