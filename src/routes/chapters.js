const express = require("express");
const ChapterController = require("../controllers/chapters");
const router = express.Router();

router.get("/:storyId", ChapterController.getAllChaptersByStoryId);
router.get("/:storyId/:chapterId", ChapterController.getChapterByStoryIdAndChapterId);
router.post("/", ChapterController.createNewChapter);
router.patch("/:storyId/:chapterId", ChapterController.updateChapter);
router.delete("/:storyId", ChapterController.deleteChapterByStoryId);
router.delete("/:storyId/:chapterId", ChapterController.deleteChapterByStoryIdAndChapterId);

module.exports = router;
