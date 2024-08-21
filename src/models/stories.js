const prisma = require('../config/database');

const getAllStories = async () => {
    return await prisma.story.findMany();
};

const getStoryById = async (idStory) => {
    return await prisma.story.findUnique({
        where: { id: idStory },
    });
};

const createNewStory = async (body) => {
    return await prisma.story.create({
        data: {
            title: body.title,
            author: body.author,
            synopsis: body.synopsis,
            category: body.category,
            storyCover: body.storyCover,
            status: body.status,
            tags: body.tags,
        },
    });
};

const updateStory = async (body, idStory) => {
    return await prisma.story.update({
        where: { id: idStory },
        data: {
            title: body.title,
            author: body.author,
            synopsis: body.synopsis,
            category: body.category,
            storyCover: body.story_cover,
            status: body.status,
            tags: body.tags,
        },
    });
};

const deleteStory = async (idStory) => {
    return await prisma.story.delete({
        where: { id: idStory },
    });
};

module.exports = {
    getAllStories,
    getStoryById,
    createNewStory,
    updateStory,
    deleteStory,
};
