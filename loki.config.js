module.exports = {
    "diffingEngine": "looks-same",
    "configurations": {
        "chrome.laptop": {
            "target": "chrome.app", // docker.chrome seems not working at windows environment, so fallback to chrome.app
            "width": 1366,
            "height": 768
        }
    },
    "chromeDockerUseCopy": true
};
