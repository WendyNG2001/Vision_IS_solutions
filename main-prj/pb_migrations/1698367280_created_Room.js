/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nzmywsbxydds8jw",
    "created": "2023-10-27 00:41:20.311Z",
    "updated": "2023-10-27 00:41:20.311Z",
    "name": "Room",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nz0irvlb",
        "name": "Room_Number",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r7rn5ejk",
        "name": "Student_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "bc30cp07y94gfvh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nzmywsbxydds8jw");

  return dao.deleteCollection(collection);
})
