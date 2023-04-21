import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

// Test ID: 573a139af29313caabcef312

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const { query } = req
        const { movie_id } = query

        const options = {
            projection: {_id:1, title:1, fullplot:1, year:1, writers:1, imdb:1}
        }

        const movie = await db
            .collection("movies")
            .findOne({ _id: ObjectId(movie_id) }, options)

            res.json(movie);
    } catch (e) {
        console.log(e);
    }
}