/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1tob1zqammhhyfx",
    "created": "2023-10-27 00:41:32.672Z",
    "updated": "2023-10-27 00:41:32.672Z",
    "name": "Apartment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lun41yiu",
        "name": "Apartment_Number",
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
        "id": "oiqjw5kz",
        "name": "Apartment_Type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "single-bedroom",
            "two-bedroom",
            "three-bedroom"
          ]
        }
      },
      {
        "system": false,
        "id": "xgf5elai",
        "name": "Apartment_Rooms",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "nzmywsbxydds8jw",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("1tob1zqammhhyfx");

  return dao.deleteCollection(collection);
})
