
const express = require("express");
const StoryController = require("../controllers/stories");
const ChapterController = require("../controllers/chapters");
const router = express.Router();
const upload = require('../middleware/upload');

router.get("/", StoryController.getAllStories);
router.get("/:id", StoryController.getStoryById);
router.post('/',
    upload.single('story_cover'),
    StoryController.createNewStory
);
router.patch("/:id", StoryController.updateStory);
router.delete("/:id", StoryController.deleteStory);

module.exports = router;
