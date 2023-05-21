function get(router, path, callback) {
    router.get(path, (req, res) => {
        console.log(`GET ${path}`);
        callback(req, res);
    });
}

function post(router, path, callback) {
    router.post(path, (req, res) => {
        console.log(`POST ${path}`);
        console.log(req.body);
        callback(req, res);
    });
}

module.exports = {
    get,
    post,
};