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

# TODO:

#### Frontend

- Redo all tests using jest and Cypress
- Add MSW for mocking and intercepting calls
- Add chart library and create the Reports page.
- Add storybook and maybe storyshot testing using playwright?

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

# BUGS:
