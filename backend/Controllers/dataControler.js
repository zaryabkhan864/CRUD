const dataSchema = require("../Models/data");
// for add data
exports.newData = async (req, res, next) => {
    const newData = await dataSchema.create(req.body);
    res.status(201).json({
        success: true,
        newData
    })
}
// for all data
exports.newDataList = async (req, res, next) => {
    const data = await dataSchema.find();
    res.status(200).json(
        {
            success: true,
            count: data.length,
            data
        }
    )
}
exports.specficData = async (req, res, next) => {
    const findData = await dataSchema.findById(req.params.id);
    console.log(`the value of data is :`, findData);
    res.status(200).json({
        success: true,
        findData
    })
}