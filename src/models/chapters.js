const prisma = require('../config/database');

const getAllChaptersByStoryId = async (storyId) => {
    return await prisma.chapter.findMany({
        where: { storyId: storyId },
    });
};

const getChapterByStoryIdAndChapterId = async (storyId, chapterId) => {
    return await prisma.chapter.findUnique({
        where: {
            id: chapterId,
            storyId: storyId,
        },
    });
};

const createNewChapter = async (body) => {
    return await prisma.chapter.create({
        data: {
            storyId: body.story_id,
            chapterTitle: body.chapter_title,
            content: body.content,
        },
    });
};

const updateChapter = async (body, storyId, chapterId) => {
    return await prisma.chapter.update({
        where: {
            id: chapterId,
            storyId: storyId,
        },
        data: {
            chapterTitle: body.chapter_title,
            content: body.content,
        },
    });
};

const deleteChaptersByStoryId = async (storyId) => {
    return await prisma.chapter.deleteMany({
        where: { storyId: storyId },
    });
};

const deleteChapter = async (storyId, chapterId) => {
    return await prisma.chapter.delete({
        where: {
            id: chapterId,
            storyId: storyId,
        },
    });
};

module.exports = {
    getAllChaptersByStoryId,
    getChapterByStoryIdAndChapterId,
    createNewChapter,
    updateChapter,
    deleteChaptersByStoryId,
    deleteChapter,
};
