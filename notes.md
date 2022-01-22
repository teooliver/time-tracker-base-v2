# Tips:

### Hot Reload:

Run cargo watch in terminal:

```rs
cargo watch -x run
```

### Calculate Duration between Datetimes

```rs
let duration = end_time.to_chrono() - initial_time.to_chrono();
println!("DURATION {:?}", duration);
```

### Convert UTC String to chrono::DateTime<Utc> to bson::DateTime

```rs
 let chrono_dt: chrono::DateTime<Utc> = "2021-10-19T20:25:17.734Z".parse().unwrap();
    let initial_time: bson::DateTime = chrono_dt.into();
    println!("{:?}", initial_time.to_string());
```

### Implement default traits for structs when needed:

> https://doc.rust-lang.org/std/default/trait.Default.html

# TODO:

#### Frontend

- Implement `load more` in Timer page using `useInfiniteQuery`.
- Redo all tests using jest and Cypress with MSW.
- Add storybook and maybe storyshot testing using playwright?
- Add pagination to Reports chart (choose spefic start/end dates or previous/next week buttons).
- Add Spinner for loading states.
- Add modal asking the user if its first the first time in the app.
  Setup cookies to show/hide cookie base on user response. Good for writing diferent types of tests based on cookies.
- Should I keep using MSW or just mock fetch requests as normal?
- Extract Wrapper component in tests to jest config

#### Backend

- Create better types for json errors.
- Extract Error handling functions to its own `lib`
- Better return messages route success (instead of just 200);
- Extract Routes to its own files
- Pagination to `Get All Tasks Grouped By Date` route, one page per week. `api/tasks?page=1&size=2`
- Add Users
- Add authentication and authorization
- Add Archive option for Clients and Projects
- Add Delete option for Clients and Projects
- Dockerize frontend and backend.
- Better Error handling in general:
- - BodyDeserializeError
- - CorsForbidden
- - UNPROCESSABLE_ENTITY (invalid ID for example)

- Add filter requests based on headers (for example team names) so we can log and understand from where and how the requests are being done.
- Add health_check route

# IMPORTANT INTEGRATION TESTS

- Add Task
- Edit Task
- Add Project
- Delete Project
- Add Client
- Delete Client

- Whole user journey from seeding tasks, create tasks, projects and clients, check Charts and so on.

# KNOWN BUGS:
