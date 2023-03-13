import stats from "../models/Stats.js";

class StatsController {
    
    static getStats = (req, res) => {
        stats.findOne((err, stats) => {
            res.status(200).json(stats)
        })
    }

    static updateStats = (objResult) => {
        stats.updateOne(objResult)
    }

}

export default StatsController;
