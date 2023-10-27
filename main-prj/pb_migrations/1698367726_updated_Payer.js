/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakbfe0slu0je07")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "46gnycah",
    "name": "Phone_Number",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vakbfe0slu0je07")

  // remove
  collection.schema.removeField("46gnycah")

  return dao.saveCollection(collection)
})
