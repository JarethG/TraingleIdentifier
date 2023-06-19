

export const getPosts = (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    if (!a&&!b&&!c) return res.status(500).json({message:"missing parameter in query"});

    return res.status(200).json({response : "a = "+ a + "b = " + b + " c = " + c});
};
