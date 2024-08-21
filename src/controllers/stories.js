const StoriesModel = require("../models/stories");
const ChaptersModel = require("../models/chapters");

const getAllStories = async (req, res) => {
    try {
        const data = await StoriesModel.getAllStories();
        res.json({
            message: "GET all stories success",
            data: data,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const getStoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await StoriesModel.getStoryById(parseInt(id));
        if (!data) {
            return res.status(404).json({
                message: "Story not found",
            });
        }
        res.json({
            message: "GET story by ID success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        });
    }
};

const createNewStory = async (req, res) => {
    const { body, file } = req;

    if (
        !body.title ||
        !body.author ||
        !body.category ||
        !body.status
    ) {
        return res.status(400).json({
            message: "Anda mengirimkan data yang salah",
            data: null,
        });
    }

    const storyData = {
        title: body.title,
        author: body.author,
        synopsis: body.synopsis,
        category: body.category,
        storyCover: file ? file.filename : null, 
        status: body.status,
        tags: body.tags,
    };

    try {
        const newStory = await StoriesModel.createNewStory(storyData);
        res.status(201).json({
            message: "CREATE new story success",
            data: newStory,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const updateStory = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedStory = await StoriesModel.updateStory(body, parseInt(id));
        res.json({
            message: "UPDATE story success",
            data: updatedStory,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const deleteStory = async (req, res) => {
    const { id } = req.params;
    try {
        await ChaptersModel.deleteChaptersByStoryId(parseInt(id));
        await StoriesModel.deleteStory(parseInt(id));
        res.json({
            message: "DELETE story and related chapters success",
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
    getAllStories,
    getStoryById,
    createNewStory,
    updateStory,
    deleteStory,
};