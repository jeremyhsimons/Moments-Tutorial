const baseURL = 'https://drf-tutorial-890382aa2714.herokuapp.com/'

export const handlers = [
    rest.get(`${baseUrl}dj-rest-auth/user`, (req, res, ctx) => {
        return res(ctx.json(
            {"pk":4,"username":"user3","email":"","first_name":"","last_name":"","profile_id":4,"profile_image":"https://res.cloudinary.com/dpvq4invf/image/upload/v1/media/../default_profile_uk3zc1"}
        ));
    }),
    rest.post(`${baseUrl}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200))
    }
]