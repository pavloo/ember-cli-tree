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
            },
            {
              "id": "3",
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
          "data": [
            {
              "id": "4",
              "type": "groups"
            },
            {
              "id": "5",
              "type": "groups"
            }
          ]
        }
      },
      "attributes": {
        "name": "Dummy Group 1"
      },
      "type": "groups",
      "id": "2"
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
          "data": [
            {
              "id": "6",
              "type": "groups"
            }
          ]
        }
      },
      "attributes": {
        "name": "Dummy Group 2"
      },
      "type": "groups",
      "id": "3"
    },
    {
      "relationships": {
        "parent": {
          "data": {
            "id": "2",
            "type": "groups"
          }
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 3"
      },
      "type": "groups",
      "id": "4"
    },
    {
      "relationships": {
        "parent": {
          "data": {
            "id": "2",
            "type": "groups"
          }
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 4"
      },
      "type": "groups",
      "id": "5"
    },
    {
      "relationships": {
        "parent": {
          "data": {
            "id": "3",
            "type": "groups"
          }
        },
        "children": {
          "data": []
        }
      },
      "attributes": {
        "name": "Dummy Group 5"
      },
      "type": "groups",
      "id": "6"
    }
  ]
};
