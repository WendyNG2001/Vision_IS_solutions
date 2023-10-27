/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bc30cp07y94gfvh",
    "created": "2023-10-27 00:33:24.087Z",
    "updated": "2023-10-27 00:33:24.087Z",
    "name": "Student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vpsg9dyd",
        "name": "ID_number",
        "type": "text",
        "required": true,
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
        "id": "s7bc7zwx",
        "name": "Full_Name",
        "type": "text",
        "required": true,
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
        "id": "yfsoll4b",
        "name": "Email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "qrolumrh",
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
      },
      {
        "system": false,
        "id": "bn2dfjl1",
        "name": "Program_Of_Study",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("bc30cp07y94gfvh");

  return dao.deleteCollection(collection);
})
