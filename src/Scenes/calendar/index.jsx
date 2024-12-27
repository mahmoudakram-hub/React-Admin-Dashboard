/** @format */

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";

import { tokens } from "../../theme";
import { useState } from "react";
import { CurrencyBitcoin, Margin } from "@mui/icons-material";
// import { formatDate } from "@fullcalendar/core/index.js";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please Enter Your Event Title");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleClickEvent = (selected) => {
    if (
      window.confirm(
        `are you Sure You Want To Dele This Event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px" display="flex" justifyContent="space-between">
      <Box
        flex={"1 1 20%"}
        backgroundColor={colors.primary[400]}
        padding="15px"
        borderRadius="20px"
      >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvent.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px  0 ",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {" "}
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box flex={"1 1 100%"} m="15px">
        <FullCalendar
          height={"75vh"}
          plugins={[
            listPlugin,
            timeGridPlugin,
            dayGridPlugin,
            interactionPlugin,
          ]}
          headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleClickEvent}
          eventsSet={(events) => setCurrentEvent(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-09-28",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
