const ChaptersModel = require("../models/chapters");

const getAllChaptersByStoryId = async (req, res) => {
    const { storyId } = req.params;
    try {
        const data = await ChaptersModel.getAllChaptersByStoryId(parseInt(storyId));
        res.json({
            message: "GET all chapters by story ID success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const getChapterByStoryIdAndChapterId = async (req, res) => {
    const { storyId, chapterId } = req.params;
    try {
        const data = await ChaptersModel.getChapterByStoryIdAndChapterId(parseInt(storyId), parseInt(chapterId));
        res.json({
            message: "GET chapter by story ID and chapter ID success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const createNewChapter = async (req, res) => {
    const { body } = req;

    try {
        await ChaptersModel.createNewChapter(body);
        res.status(201).json({
            message: "CREATE new chapter success",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const updateChapter = async (req, res) => {
    const { storyId, chapterId } = req.params;
    const { body } = req;

    try {
        await ChaptersModel.updateChapter(body, parseInt(storyId), parseInt(chapterId));
        res.json({
            message: "UPDATE chapter success",
            data: {
                storyId: storyId,
                chapterId: chapterId,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const deleteChapterByStoryId = async (req, res) => {
    const { storyId } = req.params;

    try {
        await ChaptersModel.deleteChaptersByStoryId(parseInt(storyId));
        res.json({
            message: "DELETE all chapters by story ID success",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const deleteChapterByStoryIdAndChapterId = async (req, res) => {
    const { storyId, chapterId } = req.params;

    try {
        await ChaptersModel.deleteChapter(parseInt(storyId), parseInt(chapterId));
        res.json({
            message: "DELETE chapter by story ID and chapter ID success",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

module.exports = {
    getAllChaptersByStoryId,
    getChapterByStoryIdAndChapterId,
    createNewChapter,
    updateChapter,
    deleteChapterByStoryId,
    deleteChapterByStoryIdAndChapterId,
};
