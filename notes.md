# Tips:

### Hot Reload:

Runst cargo watch in terminal:

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

- Create type for json errors.
- Return json error messages from handlers.
- Better Error handling
- Extract Error handling functions to its own `lib`
- Better return messages route success (instead of just 200);
- Extract Routes to its own files
- Pagination to `Get All Tasks Grouped By Date` route, one page per week.

# BUGS:

- Deleting client or project doesn't address the referenced objects causing the app to totaly break.
  Need to find a good strategy to deleting a client or project, probably going over all objects that references the delete field and delete the reference.
