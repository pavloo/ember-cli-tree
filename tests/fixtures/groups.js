export default {
  "data": [
    {
      "relationships": {
        "parent": {
          "data": null
        },
        "children": {
          "data": [
            {
              "id": "2",
              "type": "groups"
            }
          ]
        }
      },
      "attributes": {
        "name": "Root Groups"
      },
      "type": "groups",
      "id": "1"
    },
    {
      "relationships": {
        "parent": {
          "data": {
            "id": "1",
            "type": "groups"
          }
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Root Groups"
      },
      "type": "groups",
      "id": "2"
    },
    {
      "relationships": {
        "parent": {
          "data": null
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 1"
      },
      "type": "groups",
      "id": "3"
    },
    {
      "relationships": {
        "parent": {
          "data": null
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 2"
      },
      "type": "groups",
      "id": "4"
    },
    {
      "relationships": {
        "parent": {
          "data": null
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 3"
      },
      "type": "groups",
      "id": "5"
    }
  ]
};
