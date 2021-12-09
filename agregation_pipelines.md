# MongoDB Aggregations

This are some of the pipelines used in this project, you can copy and paste them in the MongoDB Compass to see how they works.

## Projects collection

### get_projects_grouped_by_client

```js
[
  {
    $lookup: {
      from: 'clients',
      localField: 'client',
      foreignField: '_id',
      as: 'client_name',
    },
  },
  {
    $sort: {
      updatedAt: -1,
    },
  },
  {
    $project: {
      _id: '$_id',
      name: '$name',
      color: '$color',
      client_name: {
        $ifNull: [
          {
            $arrayElemAt: ['$client_name.name', 0],
          },
          'sfsd',
        ],
      },
      subprojects: '$subprojects',
    },
  },
  {
    $group: {
      _id: '$client_name',
      projects: {
        $push: '$$ROOT',
      },
    },
  },
];
```

## Tasks Collection

```js

```
