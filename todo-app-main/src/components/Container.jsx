import classes from "./Container.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

const Container = ({ state }) => {
  const [text, setText] = useState();
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState("All");

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleButton = (index) => {
    axios
      .put("http://192.168.0.235:8080/notes", null, {
        params: {
          id: notes[index].id,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          getAllNotes();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getAllNotes = () => {
    axios
      .get("http://192.168.0.235:8080/notes")
      .then((res) => {
        setNotes([]);
        res.data.forEach((item) => {
          setNotes((prev) => {
            return [item, ...prev];
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const enterPressHandler = (event) => {
    if (event.key == "Enter") {
      axios
        .post("http://192.168.0.235:8080/notes", {
          note: event.target.value,
          isCompleted: false,
        })
        .then((res) => {
          if (res.status == 200) {
            setText("");
            getAllNotes();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteHandler = (item) => {
    axios
      .delete("http://192.168.0.235:8080/notes", {
        params: {
          id: item.id,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          getAllNotes();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClearComplete = () => {
    notes.forEach((item) => {
      if (item.completed == true) {
        deleteHandler(item);
      }
    });

    setPage("All");
  };

  const handlePageChange = (event) => {
    setPage(event.target.outerText);
  };

  let strikeThroughColor =
    state == "sun" ? classes.strikeThroughDark : classes.strikeThroughLight;
  let noNotesColor =
    state == "sun" ? classes.noNotesDark : classes.noNotesLight;
  let inputColorScheme =
    state == "sun" ? classes.inputDark : classes.inputLight;
  let colorScheme = state == "sun" ? classes.colorDark : classes.colorLight;
  let buttonColor = state == "sun" ? classes.buttonDark : classes.buttonLight;
  let buttomColor = state == "sun" ? classes.bottomDark : classes.bottomLight;

  let remainingTasks = 0;
  notes.forEach((item) => {
    if (!item.completed) {
      remainingTasks++;
    }
  });

  let element = 0;
  let container = notes.map((item, index) => {
    let html = (
      <div key={item.id} className={`${classes.container} ${colorScheme}`}>
        <button
          className={`${classes.button} ${buttonColor} ${
            notes[index]["completed"] ? classes.buttonClicked : null
          }`}
          onClick={() => handleButton(index)}
        ></button>
        <p
          className={`${classes.listItem} ${inputColorScheme} ${
            notes[index]["completed"] ? strikeThroughColor : null
          }`}
          onClick={() => handleButton(index)}
        >
          {item.note}
        </p>
        <div
          className={`${classes.deleteButton}`}
          onClick={() => deleteHandler(item)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    );

    if (page == "Active") {
      if (item.completed == false) {
        element++;
        return html;
      }
    } else if (page == "Completed") {
      if (item.completed == true) {
        element++;
        return html;
      }
    } else {
      element++;
      return html;
    }
  });

  return (
    <>
      <div className={`${classes.container} ${colorScheme}`}>
        <button className={`${classes.buttonInput} ${buttonColor}`}></button>
        <input
          type="text"
          className={`${classes.input} ${inputColorScheme}`}
          placeholder="Create a new todo..."
          value={text}
          onKeyDown={enterPressHandler}
          onChange={handleChange}
        />
      </div>
      {element > 0 ? (
        <div className={`${classes.notesContainer} ${colorScheme}`}>
          {container}
          <div className={`${classes.lastContainer} ${colorScheme}`}>
            <p className={buttomColor}>
              {remainingTasks} {remainingTasks > 1 ? "items" : "item"} left
            </p>
            <Footer state={state} page={page} onPageChange={handlePageChange}>
              Desktop
            </Footer>
            <p onClick={handleClearComplete} className={buttomColor}>
              Clear Completed
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className={`${classes.noNotes} ${noNotesColor}`}>Nothing to do!</p>
          <Footer state={state} page={page} onPageChange={handlePageChange}>
            Nothing
          </Footer>
        </>
      )}
      <Footer state={state} page={page} onPageChange={handlePageChange}>
        Mobile
      </Footer>
    </>
  );
};

export default Container;
