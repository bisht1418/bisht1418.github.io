import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCalendars = ({ username }) => {
  useEffect(() => {
    GitHubCalendar(".github-calendar", username, {
      global_stats: false,
      responsive: true,
    });
  }, [username]);

  return <div className="github-calendar"></div>;
};

export default GitHubCalendars;
