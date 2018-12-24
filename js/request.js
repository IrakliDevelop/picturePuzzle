function request(url) {
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText))
                } else {
                    reject(req)
                }
            }
        };
        req.setRequestHeader("Content-Type", "application/json");
        req.send();
    });
}