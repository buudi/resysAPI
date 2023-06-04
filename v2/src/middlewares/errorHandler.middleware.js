
function errorHandler(err, req, res, next) {
    // Log the error
    console.log(`DATABASE ERROR: ${err.message}`);

    // Send an error response
    res.status(500).json({
        error: 'Internal Server Error'
    });
}

module.exports = errorHandler;
