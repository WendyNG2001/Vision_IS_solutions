/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzmywsbxydds8jw")

  // remove
  collection.schema.removeField("r7rn5ejk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nzmywsbxydds8jw")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
