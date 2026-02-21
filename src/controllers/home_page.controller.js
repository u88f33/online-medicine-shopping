const homePageController = (req, res, next) => {
    try {
        res.render(
            "home/homepage"
        );
    } catch ( error ) {
        console.log( `Error while rendering Home Page: ${ error.message }` );
    }
};

export default homePageController;