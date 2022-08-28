function getStatus(req, res) {
    res.status(200).send({
        message: 'Server up and running smoothly...'
    });
}

export {getStatus}